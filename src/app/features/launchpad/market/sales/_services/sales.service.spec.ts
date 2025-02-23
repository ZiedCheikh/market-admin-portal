import { of } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Sale } from '../_models/sale.model';
import { SalesService } from './sales.service';
import { SaleFactory } from '../../../../../testing/factory/sale-factory';

describe('SalesService', () => {
  let service: SalesService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let httpClientSpy: any;
  let salesBaseUrl: string;

  beforeEach(() => {
    httpClientSpy = { get: jest.fn(), post: jest.fn() };
    service = new SalesService(httpClientSpy);
    salesBaseUrl = environment.salesApiUrl;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getSalesDfrat', () => {
    const status = 'draft';
    const endPoint = `${salesBaseUrl}/sales/status/${status}`;
    const sale: Sale = SaleFactory.createSale();
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(sale));
    service.getSalesByStatus(status).subscribe({
      next: (data) => {
        expect(data).toEqual(sale);
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(endPoint);
  });

  it('should call createSale', () => {
    const endPoint = `${salesBaseUrl}/sales`;
    const sale: Sale = SaleFactory.createSale();
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(sale));
    service.createSale(sale).subscribe({
      next: (data) => {
        expect(data).toEqual(sale);
      },
    });
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith(endPoint, sale);
  });
});
