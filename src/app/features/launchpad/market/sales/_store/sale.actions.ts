import { Action } from '@ngrx/store';
import { Sale } from '../_models/sale.model';

export const LOAD_SALES = '[Sales] Load Sales';
export const LOAD_SALES_SUCESS = '[Sales] Load Sales Success';
export const LOAD_SALES_FAILURE = '[Sales] Load Sales Failure';

export const ADD_SALE = '[Sales] Add Sale';
export const ADD_SALE_SUCEESS = '[Sales] Add Sale Success';
export const ADD_SALE_FAILURE = '[Sales] Add Sale Failure';

export class LoadSalesAction implements Action {
  readonly type = LOAD_SALES;
}

export class LoadSalesSucessAction implements Action {
  readonly type = LOAD_SALES_SUCESS;
  constructor(public sales: Sale[]) {}
}

export class LoadSalesFailureAction implements Action {
  readonly type = LOAD_SALES_FAILURE;
  constructor(public error: string) {}
}

export class AddSaleAction implements Action {
  readonly type = ADD_SALE;
  constructor(public sale: Sale) {}
}

export class AddSaleSuccesAction implements Action {
  readonly type = ADD_SALE_SUCEESS;
  constructor(public sale: Sale) {}
}

export class AddSaleFailureAction implements Action {
  readonly type = ADD_SALE_FAILURE;
  constructor(public error: string) {}
}

export type SalesActions =
  | LoadSalesAction
  | LoadSalesSucessAction
  | LoadSalesFailureAction
  | AddSaleAction
  | AddSaleSuccesAction
  | AddSaleFailureAction;
