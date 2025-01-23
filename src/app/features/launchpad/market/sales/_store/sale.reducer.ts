import { Action } from '@ngrx/store';
import { Sale } from '../_models/sale.model';
import {
  ADD_SALE,
  ADD_SALE_FAILURE,
  ADD_SALE_SUCEESS,
  AddSaleFailureAction,
  AddSaleSuccesAction,
  LOAD_SALES,
  LOAD_SALES_FAILURE,
  LOAD_SALES_SUCESS,
  LoadSalesFailureAction,
  LoadSalesSucessAction,
  SalesActions,
} from './sale.actions';

export interface SalesState {
  sales: Sale[];
  loading: boolean;
  error: string | null;
}

export const initialSalesState: SalesState = {
  sales: [],
  loading: false,
  error: null,
};

export function salesReducer(state = initialSalesState, action: SalesActions | Action) {
  if (action.type === LOAD_SALES) {
    return { ...state, loading: true };
  }

  if (action.type === LOAD_SALES_SUCESS) {
    const sales = (action as LoadSalesSucessAction).sales;
    return { ...state, loading: false, sales };
  }

  if (action.type === LOAD_SALES_FAILURE) {
    const error = (action as LoadSalesFailureAction).error;
    return { ...state, loading: false, error };
  }

  if (action.type === ADD_SALE) {
    return { ...state, loading: true };
  }

  if (action.type === ADD_SALE_SUCEESS) {
    const sale = (action as AddSaleSuccesAction).sale;
    const sales = [...state.sales, sale];
    return { ...state, loading: false, sales };
  }

  if (action.type === ADD_SALE_FAILURE) {
    const error = (action as AddSaleFailureAction).error;
    return { ...state, loading: false, error };
  }
  return state;
}
