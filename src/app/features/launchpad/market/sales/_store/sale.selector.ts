import { createSelector } from '@ngrx/store';
import { SalesState } from './sale.reducer';

export const selectSalesState = (state: { sales: SalesState }) => state.sales;

export const selectSalesByStatus = createSelector(selectSalesState, (state) => state.salesByStatus);

export const selectSalesByStatusLoading = createSelector(
  selectSalesState,
  (state) => state.loading
);

export const selectSalesByStatusError = createSelector(selectSalesState, (state) => state.error);
