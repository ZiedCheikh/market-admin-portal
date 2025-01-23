import { createSelector } from '@ngrx/store';
import { SalesState } from './sale.reducer';

export const selectSalesState = (state: { sales: SalesState }) => state.sales;

export const selectAllSales = createSelector(selectSalesState, (state) => state.sales);

export const selectLoading = createSelector(selectSalesState, (state) => state.loading);

export const selectError = createSelector(selectSalesState, (state) => state.error);
