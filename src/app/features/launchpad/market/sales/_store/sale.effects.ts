import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, map, mergeMap, catchError } from 'rxjs';
import {
  ADD_SALE,
  LOAD_SALES_BY_STATUS,
  AddSaleFailureAction,
  AddSaleSuccesAction,
  LoadSalesByStatusFailureAction,
  LoadSalesByStatusSucessAction,
} from './sale.actions';

import { SalesService } from '../_services/sales.service';

@Injectable()
export class SalesEffects {
  private actions$ = inject(Actions);
  private salesService = inject(SalesService);

  loadSalesByStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_SALES_BY_STATUS),
      mergeMap((action) =>
        this.salesService.getSalesByStatus(action.status).pipe(
          map((sales) => new LoadSalesByStatusSucessAction(sales)),
          catchError((error) => of(new LoadSalesByStatusFailureAction(error.error)))
        )
      )
    )
  );

  addSale$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_SALE),
      mergeMap((action) =>
        this.salesService.createSale(action.sale).pipe(
          map((sale) => new AddSaleSuccesAction(sale)),
          catchError((error) => of(new AddSaleFailureAction(error)))
        )
      )
    )
  );
}
