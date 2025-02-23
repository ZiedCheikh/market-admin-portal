import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import {
  selectSalesByStatus,
  selectSalesByStatusLoading,
  selectSalesByStatusError,
} from '../../_store/sale.selector';
import { SaleCreateComponent } from './sale.create.component';
import { AddSaleAction } from '../../_store/sale.actions';
import { Sale } from '../../_models/sale.model';

describe('SaleCreateComponent', () => {
  let component: SaleCreateComponent;
  let fixture: ComponentFixture<SaleCreateComponent>;
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
      imports: [SaleCreateComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SaleCreateComponent);
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
    expect(component.title).toBe('Sale create Startup Market');
  });

  it('should initialize sale create form with empty values', () => {
    expect(component.saleForm.value).toEqual({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  });

  it('should be invalid when form is empty', () => {
    expect(component.saleForm.valid).toBeFalsy();
  });

  it('should be valid when required fields are filled', () => {
    component.saleForm.patchValue({
      title: 'Test Sale',
      description: 'Test Description',
      startDate: '2024-03-20T10:30',
      endDate: '2024-03-22T10:30',
    });
    expect(component.saleForm.valid).toBeTruthy();
  });

  it('should dispatch AddSaleAction when form is valid', () => {
    const formData = {
      title: 'Test Sale',
      description: 'Test Description',
      startDate: '2015-08-03T10:30',
      endDate: '2015-08-05T10:30',
    };

    const sale: Sale = {
      title: 'Test Sale',
      description: 'Test Description',
      startDate: '2015-08-03T10:30',
      endDate: '2015-08-05T10:30',
    };

    component.saleForm.patchValue(formData);
    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalledWith(new AddSaleAction(sale));
  });

  it('should have submit button disabled when form is invalid', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submitButton.nativeElement.disabled).toBeTruthy();
  });
});
