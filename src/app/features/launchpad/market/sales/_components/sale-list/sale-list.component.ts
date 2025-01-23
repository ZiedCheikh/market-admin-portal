import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAllSales, selectLoading } from '../../_store/sale.selector';
import { Sale } from '../../_models/sale.model';
import { SalesState } from '../../_store/sale.reducer';
import { LoadSalesAction } from '../../_store/sale.actions';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.scss',
  imports: [CommonModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleListComponent {
  title = 'Sale list Startup Market';
  private store = inject(Store<{ sales: SalesState }>);
  sales$: Observable<Sale[]>;
  loading$: Observable<boolean>;

  constructor() {
    this.store.dispatch(new LoadSalesAction());
    this.sales$ = this.store.select(selectAllSales);
    this.loading$ = this.store.select(selectLoading);
  }
}
