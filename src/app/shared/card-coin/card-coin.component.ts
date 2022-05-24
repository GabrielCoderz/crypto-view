import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.scss']
})
export class CardCoinComponent implements OnInit {
  @Input('data-input') filterDataInput: string = '';

  public cryptoData = new BehaviorSubject<any>([])
  public cryptoFilteredData = new BehaviorSubject<any>([])

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCryptoService()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.filterDataInput) {
      console.log(this.filterDataInput)
      this.filterData()
    }
  }

  getCryptoService() {
    this.cryptoService
    .listCrypto()
    .subscribe((data: any) => {
      this.cryptoData.next(data);
      console.log(data)
    });
  }

  filterData() {
    this.cryptoData
    .pipe(
      tap((data: Array<[]>) => {
        this.cryptoFilteredData.next(
          data.filter((coin: any) => coin.name.toLowerCase().includes(this.filterDataInput.toLowerCase()))
        )
      })
    )
    .subscribe()
  }

}
