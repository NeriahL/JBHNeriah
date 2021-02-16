import { Component, Input, OnInit, Output } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { moreInfoModel } from 'src/app/models/more-info.model';
import { CoinService } from 'src/app/services/coin.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';
import { HttpEventType, HttpClient, HttpRequest} from '@angular/common/http';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public isCollapsed = true;
  public popUp= true;
  isLoading: boolean;
  public isChecked= false;
  @Input() card: coinModel;

  nCard:coinModel;

  coinInfo: moreInfoModel;
  ListOfCoins: string[]= [];

  constructor(private coinService: CoinService) {
    this.setUpCoins()
    this.nCard = this.card
   }

  ngOnInit(): void {
   this.setUpCoins()
  }
  setUpCoins(){
    this.coinService.setUpCoins()
    this.coinService.getCheckedList().subscribe(data => {this.ListOfCoins = data;
    if(this.ListOfCoins.indexOf(this.card.id) != -1){
      this.isChecked = true;
    }})
  }

  moreInfo(name:string) {
    this.isCollapsed = !this.isCollapsed
    if (this.isCollapsed==false) {
      this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
        this.coinService.getMoreData(name).subscribe(data =>  {
          this.coinInfo = {
            ImageUrl: data.image.large,
            EURprice: data.market_data.current_price.eur, 
            ILSprice: data.market_data.current_price.ils, 
            USDprice: data.market_data.current_price.usd
          }
          console.log(this.coinInfo)
        })
        
      }
    }

  checkOff() {
    this.popUp= this.coinService.checkOffItem(this.card);
    if(this.popUp==true) {
      this.isChecked = !this.isChecked
    }
    console.log(this.popUp);
  }
}