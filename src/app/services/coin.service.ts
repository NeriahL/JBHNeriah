import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { coinModel } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  COINS_CACHE = {};

  coinData: coinModel[]= [];
  siftedCoinData: coinModel[]= [];
  coinList: string[]= [];
  coinList2: coinModel[]= [];
  i: number= 0;

  ListSubject = new Subject<string[]>();
  testData = new Subject<string>();
  button = new Subject<boolean>();
  boolVal: boolean = true;

  constructor(private httpClient: HttpClient) { }

  setUpCoins() {
    this.ListSubject.next(this.coinList)
  }

  public checkOffItem(coin: coinModel): boolean {
    if(this.coinList.indexOf(coin.id) != -1) {
      this.subtract(coin)
      this.boolVal = true
    } else {
      if (this.coinList.length <= 4) {
        this.add(coin)
        this.boolVal = true
      } else {
        this.boolVal = false
      }
    }
    this.ListSubject.next(this.coinList)
    return this.boolVal;
  }

  subtract(coin:coinModel) {
      console.log(this.coinList.indexOf(coin.id))
      this.coinList.splice(this.coinList.indexOf(coin.id), 1)
      this.coinList2.splice(this.coinList2.indexOf(coin), 1)
      console.log(this.coinList)
      console.log(this.coinList2)
  }
  add(coin:coinModel) {
      this.coinList.push(coin.id)
      this.coinList2.push(coin)
      console.log(this.coinList)
      console.log(this.coinList2)
  }

  getCheckedList(): Observable<string[]> {
    return this.ListSubject.asObservable();
  }

  public searchItem(val: string){
    this.testData.next(val);
  }

  displaySearch(): Observable<string>{
    return this.testData.asObservable();
  }

  getFullList (): Observable<any> {
    return this.httpClient.get('https://api.coingecko.com/api/v3/coins')
  }
  getMoreData (id: string ):Observable<any> {
    if (this.COINS_CACHE[id]) {
      return of(this.COINS_CACHE[id]);
    }else
    return this.httpClient.get('https://api.coingecko.com/api/v3/coins/'+id)
    .pipe(tap(r => 
      {this.COINS_CACHE[id] = r;
      setTimeout(() => {delete this.COINS_CACHE[id]}, 120*1000);}))
  }
 
}
