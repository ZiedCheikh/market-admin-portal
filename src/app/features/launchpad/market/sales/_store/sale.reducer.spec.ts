import { salesReducer, initialSalesState } from './sale.reducer';
import * as SaleActions from './sale.actions';
import { Sale } from '../_models/sale.model';
import { Error } from '../../../../../shared/models/error.model';

describe('Sales Reducer', () => {
  describe('Initial State', () => {
    it('should return default state', () => {
      const action: { type: string } = { type: 'NOOP' };
      const state = salesReducer(undefined, action);

      expect(state).toBe(initialSalesState);
    });
  });

  describe('LOAD_SALES_BY_STATUS Actions', () => {
    it('should set loading true', () => {
      const action = new SaleActions.LoadSalesByStatusAction('draft');
      const state = salesReducer(initialSalesState, action);

      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should update state with sales on success', () => {
      const mockSales: Sale[] = [
        { id: '1', title: 'Sale 1' } as Sale,
        { id: '2', title: 'Sale 2' } as Sale,
      ];

      const action = new SaleActions.LoadSalesByStatusSucessAction(mockSales);
      const state = salesReducer(initialSalesState, action);

      expect(state.loading).toBe(false);
      expect(state.salesByStatus).toEqual(mockSales);
      expect(state.error).toBeNull();
    });

    it('should set error on failure', () => {
      const error: Error = { status: null, message: 'Error loading sales' };
      const action = new SaleActions.LoadSalesByStatusFailureAction(error);
      const state = salesReducer(initialSalesState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toEqual(error);
    });
  });

  describe('ADD_SALE Actions', () => {
    it('should set loading true on add', () => {
      const action = new SaleActions.AddSaleAction({} as Sale);
      const state = salesReducer(initialSalesState, action);

      expect(state.loading).toBe(true);
    });

    it('should add sale to state on success', () => {
      const initialState = {
        ...initialSalesState,
        salesByStatus: [{ id: '1', title: 'Existing Sale' } as Sale],
      };

      const newSale: Sale = { id: '2', title: 'New Sale' } as Sale;
      const action = new SaleActions.AddSaleSuccesAction(newSale);
      const state = salesReducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.salesByStatus).toContainEqual(newSale);
      expect(state.error).toBeNull();
    });

    it('should set error on add failure', () => {
      const error: Error = { status: null, message: 'Error loading sales' };
      const action = new SaleActions.AddSaleFailureAction(error);
      const state = salesReducer(initialSalesState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toEqual(error);
    });
  });
});
