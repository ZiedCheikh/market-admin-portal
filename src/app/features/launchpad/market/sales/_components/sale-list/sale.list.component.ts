import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectSalesByStatus,
  selectSalesByStatusLoading,
  selectSalesByStatusError,
} from '../../_store/sale.selector';
import { Sale } from '../../_models/sale.model';
import { SalesState } from '../../_store/sale.reducer';
import { LoadSalesByStatusAction } from '../../_store/sale.actions';
import { Error } from '../../../../../../shared/models/error.model';
import { Status } from '../../_models/sale.status.enum';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale.list.component.html',
  styleUrl: './sale.list.component.scss',
  imports: [CommonModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleListComponent implements OnInit {
  title = 'Sale list Startup Market';
  private store = inject(Store<{ sales: SalesState }>);
  salesByStatus$: Observable<Sale[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error | null>;

  ngOnInit(): void {
    this.store.dispatch(new LoadSalesByStatusAction(Status.DRAFT));
  }

  constructor() {
    this.salesByStatus$ = this.store.select(selectSalesByStatus);
    this.loading$ = this.store.select(selectSalesByStatusLoading);
    this.error$ = this.store.select(selectSalesByStatusError);
  }
}
