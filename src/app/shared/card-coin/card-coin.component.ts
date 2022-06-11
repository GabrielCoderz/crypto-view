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
  filterDataInput: string = '';

  public cryptoData = new BehaviorSubject<any>([])
  public cryptoFilteredData = new BehaviorSubject<any>([])
  public cryptoFilteredData2 = [];
  public textError: string = '';

  public isLoading: boolean = true;

  displayedColumns: string[] = ['name', 'value', 'symbol', 'price_percentage', 'actions'];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCryptoService()
  }

  getCryptoService() {
    this.cryptoService
    .listCrypto()
    .subscribe((data: any) => {
      this.cryptoData.next(data);
      this.filterData()
      this.isLoading = false;
      console.log(data)
    });
  }

  onKeyUpInput($event: any) {
    this.filterDataInput = $event.target.value;
    this.filterData()
  }

  filterData() {
    this.cryptoData
    .pipe(
      tap((data: any) => {
        this.cryptoFilteredData.next(
          data.filter((coin: any) => coin.name.toLowerCase().includes(this.filterDataInput.toLowerCase()))
        )

        this.cryptoFilteredData2 = data.filter((coin: any) => coin.name.toLowerCase().includes(this.filterDataInput.toLowerCase()));

        if(this.cryptoFilteredData2.length === 0) {
          this.textError = 'Crypto não encontrada.';
          console.log(this.textError)
        }

      })
    )
    .subscribe()
  }

}
