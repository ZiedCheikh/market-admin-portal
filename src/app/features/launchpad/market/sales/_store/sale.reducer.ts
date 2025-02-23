import { Action } from '@ngrx/store';
import { Sale } from '../_models/sale.model';
import {
  ADD_SALE,
  ADD_SALE_FAILURE,
  ADD_SALE_SUCEESS,
  LOAD_SALES_BY_STATUS,
  LOAD_SALES_BY_STATUS_SUCCESS,
  LOAD_SALES_BY_STATUS_FAILURE,
  LoadSalesByStatusFailureAction,
  LoadSalesByStatusSucessAction,
  AddSaleFailureAction,
  AddSaleSuccesAction,
  SalesActions,
} from './sale.actions';
import { Error } from '../../../../../shared/models/error.model';

export interface SalesState {
  salesByStatus: Sale[];
  loading: boolean;
  error: Error | null;
}

export const initialSalesState: SalesState = {
  salesByStatus: [],
  loading: false,
  error: null,
};

export function salesReducer(state = initialSalesState, action: SalesActions | Action) {
  if (action.type === LOAD_SALES_BY_STATUS) {
    return { ...state, loading: true };
  }

  if (action.type === LOAD_SALES_BY_STATUS_SUCCESS) {
    const salesByStatus = (action as LoadSalesByStatusSucessAction).sales;
    return { ...state, loading: false, salesByStatus };
  }

  if (action.type === LOAD_SALES_BY_STATUS_FAILURE) {
    const error = (action as LoadSalesByStatusFailureAction).error;
    return { ...state, loading: false, error };
  }

  if (action.type === ADD_SALE) {
    return { ...state, loading: true };
  }

  if (action.type === ADD_SALE_SUCEESS) {
    const sale = (action as AddSaleSuccesAction).sale;
    const sales = [...state.salesByStatus, sale];
    return { ...state, salesByStatus: sales, loading: false };
  }

  if (action.type === ADD_SALE_FAILURE) {
    const error = (action as AddSaleFailureAction).error;
    return { ...state, loading: false, error };
  }
  return state;
}
