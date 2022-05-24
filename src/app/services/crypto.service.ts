import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  readonly apiURL : string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private httpClient: HttpClient) {}

  listCrypto(): any {
    return this.httpClient.get(
      this.apiURL
      ).pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Capital not found!' );
           })
        )
    }
  }

