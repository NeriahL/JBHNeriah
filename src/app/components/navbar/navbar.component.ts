import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { coinModel } from 'src/app/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  coinData: coinModel[]= [];
  siftedCoinData: coinModel[]= [];
  buttonVal: boolean = false;
  buttonText: string = "Search"

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
  }
  searchItem(val: HTMLInputElement) {
    this.coinService.searchItem(val.value)
  }
}
