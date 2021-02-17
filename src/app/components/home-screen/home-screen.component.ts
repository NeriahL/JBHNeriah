import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { coinModel } from 'src/app/models/coin.model';

import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  coinData: coinModel[]=[];
  siftedCoinData: coinModel[]=[];
  coinList: string[]=[]; 
  val: string;
  card: string;
  buttonChange:boolean = false;

  show: boolean;
  public isLoading = false;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {this.coinService.getFullList().subscribe(info => {
      this.coinData = info;
      this.loadCards()
      console.log(this.coinData)})

   this.displayCurrency()
   this.isLoading = false;
  }, 2000);
  }

  public displayCurrency(){
    this.coinService.getFullList().subscribe(info => {
      this.coinData = info;
      this.coinService.displaySearch().subscribe(value => {
        this.val = value; 
        console.log(this.val)
        this.siftedCoinData.length = 0;
        if ((/[a-zA-Z]/).test(this.val)){
          for (let i = 0; i < this.coinData.length; i++) {
            if (this.coinData[i].id.includes(this.val) || this.coinData[i].name.includes(this.val) || this.coinData[i].symbol.includes(this.val)) {
              this.siftedCoinData.push(this.coinData[i])
            }
          }
        } else {
          this.loadCards()
      }
      console.log(this.siftedCoinData)
      console.log(this.coinData)})
    })
  }

  loadCards() {
    for (let i = 0; i < this.coinData.length; i++) {
      if(this.coinService.coinList.indexOf(this.coinData[i].id) != -1){
        this.siftedCoinData.push(this.coinData[i])
      }
    }
    for(let i = 0; i < 20; i++) {
      if(this.coinService.coinList.indexOf(this.coinData[i].id) == -1){
        this.siftedCoinData.push(this.coinData[i])
      }
    }
  }
}

