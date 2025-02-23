import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Sale } from '../_models/sale.model';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private baseUrl = environment.salesApiUrl;

  constructor(private http: HttpClient) {}

  getSalesByStatus(status: string): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.baseUrl}/sales/status/${status}`);
  }

  createSale(saleData: Sale): Observable<Sale> {
    return this.http.post<Sale>(`${this.baseUrl}/sales`, saleData);
  }
}
