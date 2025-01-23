import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Sale } from '../_models/sale.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private sales: Sale[] = [];

  $sales = new BehaviorSubject<Sale[]>([]);

  get allSales() {
    const storedSales = localStorage.getItem('sales');
    if (storedSales !== null) {
      this.sales = JSON.parse(storedSales); // Now it's safe to pass
    } else {
      this.sales = [];
    }
    return this.sales;
  }

  getSales(): Observable<Sale[]> {
    return of(this.allSales);
  }
  addSale(saleData: Sale): Observable<Sale> {
    this.sales = [...this.sales, saleData];
    localStorage.setItem('sales', JSON.stringify(this.sales));
    return of(saleData);
  }
}
