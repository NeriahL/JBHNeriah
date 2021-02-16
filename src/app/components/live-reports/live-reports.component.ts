import { Component, OnInit } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { moreInfoModel } from 'src/app/models/more-info.model';
import { updateModel } from 'src/app/models/Update.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-live-reports',
  templateUrl: './live-reports.component.html',
  styleUrls: ['./live-reports.component.css']
})
export class LiveReportsComponent implements OnInit {

  coinUpdates: updateModel[] = [];
  coinNameList: string[]= [];
  isLoading = false;
  

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    console.log("Live Reports")
    for(let i = 0; i <this.coinService.coinList.length; i++) {
      let name = this.coinService.coinList[i];
      this.coinService.getMoreData(name).subscribe(data =>  {
        this.coinUpdates[i] = {
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          ImageUrl: data.image.large,
          EURprice: data.market_data.current_price.eur, 
          ILSprice: data.market_data.current_price.ils, 
          USDprice: data.market_data.current_price.usd
        }})
      }
      console.log()
    }

    getUpdate(coinName: string){
      this.coinService.getMoreData(coinName).subscribe(data =>  {
        this.coinUpdates[this.coinService.coinList.indexOf(coinName)] = {
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          ImageUrl: data.image.large,
          EURprice: data.market_data.current_price.eur, 
          ILSprice: data.market_data.current_price.ils, 
          USDprice: data.market_data.current_price.usd
        }})
    }
  }
  