import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, map, mergeMap, catchError } from 'rxjs';
import {
  ADD_SALE,
  AddSaleFailureAction,
  AddSaleSuccesAction,
  LOAD_SALES,
  LoadSalesFailureAction,
  LoadSalesSucessAction,
} from './sale.actions';

import { SalesService } from '../_services/sales.service';

@Injectable()
export class SalesEffects {
  private actions$ = inject(Actions);
  private salesService = inject(SalesService);

  loadSales$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_SALES),
      mergeMap(() =>
        this.salesService.getSales().pipe(
          map((sales) => new LoadSalesSucessAction(sales)),
          catchError((error) => of(new LoadSalesFailureAction(error)))
        )
      )
    )
  );

  addSale$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_SALE),
      mergeMap((action) =>
        this.salesService.addSale(action.sale).pipe(
          map((sale) => new AddSaleSuccesAction(sale)),
          catchError((error) => of(new AddSaleFailureAction(error)))
        )
      )
    )
  );
}
