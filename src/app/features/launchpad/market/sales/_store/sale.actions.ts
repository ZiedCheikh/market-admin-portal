import { Action } from '@ngrx/store';
import { Sale } from '../_models/sale.model';
import { Error } from '../../../../../shared/models/error.model';

export const LOAD_SALES_BY_STATUS = '[Sales] Load Sales By Status';
export const LOAD_SALES_BY_STATUS_SUCCESS = '[Sales] Load Sales By Status Success';
export const LOAD_SALES_BY_STATUS_FAILURE = '[Sales] Load Sales By Status Failure ';

export const ADD_SALE = '[Sales] Add Sale';
export const ADD_SALE_SUCEESS = '[Sales] Add Sale Success';
export const ADD_SALE_FAILURE = '[Sales] Add Sale Failure';

export class LoadSalesByStatusAction implements Action {
  readonly type = LOAD_SALES_BY_STATUS;
  constructor(public status: string) {}
}

export class LoadSalesByStatusSucessAction implements Action {
  readonly type = LOAD_SALES_BY_STATUS_SUCCESS;
  constructor(public sales: Sale[]) {}
}

export class LoadSalesByStatusFailureAction implements Action {
  readonly type = LOAD_SALES_BY_STATUS_FAILURE;
  constructor(public error: Error) {}
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
  constructor(public error: Error) {}
}

export type SalesActions =
  | LoadSalesByStatusAction
  | LoadSalesByStatusSucessAction
  | LoadSalesByStatusFailureAction
  | AddSaleAction
  | AddSaleSuccesAction
  | AddSaleFailureAction;
