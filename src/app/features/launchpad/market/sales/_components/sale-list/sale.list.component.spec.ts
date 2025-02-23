import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SaleListComponent } from './sale.list.component';
import { LoadSalesByStatusAction } from '../../_store/sale.actions';
import {
  selectSalesByStatus,
  selectSalesByStatusLoading,
  selectSalesByStatusError,
} from '../../_store/sale.selector';
import { Status } from '../../_models/sale.status.enum';
import { Sale } from '../../_models/sale.model';
import { By } from '@angular/platform-browser';
import { SaleFactory } from '../../../../../../testing/factory/sale-factory';

describe('SaleListComponent', () => {
  let component: SaleListComponent;
  let fixture: ComponentFixture<SaleListComponent>;
  let store: MockStore;

  const initialState = {
    sales: {
      items: [],
      loading: false,
      error: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SaleListComponent);
    component = fixture.componentInstance;

    // Mock selectors
    store.overrideSelector(selectSalesByStatus, []);
    store.overrideSelector(selectSalesByStatusLoading, false);
    store.overrideSelector(selectSalesByStatusError, null);

    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Sale list Startup Market');
  });

  it('should dispatch LoadSalesByStatusAction with DRAFT status on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(new LoadSalesByStatusAction(Status.DRAFT));
  });

  it('should select sales from store', (done) => {
    const mockSales: Sale[] = [{ id: '1', title: 'Test Sale' } as Sale];
    store.overrideSelector(selectSalesByStatus, mockSales);
    store.refreshState();

    component.salesByStatus$.subscribe((sales) => {
      expect(sales).toEqual(mockSales);
      done();
    });
  });

  it('should select loading state', (done) => {
    store.overrideSelector(selectSalesByStatusLoading, true);
    store.refreshState();

    component.loading$.subscribe((loading) => {
      expect(loading).toBe(true);
      done();
    });
  });

  it('should select error state', (done) => {
    const mockError = { status: '400', message: 'Test error' };
    store.overrideSelector(selectSalesByStatusError, mockError);
    store.refreshState();

    component.error$.subscribe((error) => {
      expect(error).toEqual(mockError);
      done();
    });
  });

  it('should render sales list', () => {
    const mockSales: Sale[] = SaleFactory.createSales();
    store.overrideSelector(selectSalesByStatus, mockSales);
    store.refreshState();
    fixture.detectChanges();
    const saleElements = fixture.debugElement.queryAll(By.css('li'));
    expect(saleElements.length).toBe(mockSales.length);
    saleElements.forEach((el, index) => {
      expect(el.nativeElement.textContent).toContain(mockSales[index].title);
      expect(el.nativeElement.textContent).toContain(mockSales[index].description);
    });
  });
});
