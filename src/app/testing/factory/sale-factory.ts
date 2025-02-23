import { Sale } from '../../features/launchpad/market/sales/_models/sale.model';

export class SaleFactory {
  static createSale(overrides: Partial<Sale> = {}): Sale {
    return {
      title: 'Bersh Mode',
      description: 'Depuis 1998, Bersh Mode est la marque préférée des jeunes',
      startDate: '2021-01-01T00:00Z',
      endDate: '2021-01-02T00:00Z',
      ...overrides,
    };
  }

  static createSaleWithId(overrides: Partial<Sale> = {}): Sale {
    return {
      id: '1',
      title: 'Bersh Mode',
      description: 'Depuis 1998, Bersh Mode est la marque préférée des jeunes',
      startDate: '2021-01-01T00:00Z',
      endDate: '2021-01-02T00:00Z',
      ...overrides,
    };
  }

  static createSales(overrides: Partial<Sale> = {}): Sale[] {
    return [
      {
        title: 'Bersh Mode',
        description: 'Depuis 1998, Bersh Mode est la marque préférée des jeunes',
        startDate: '2021-01-01T00:00',
        endDate: '2021-01-02T00:00',
        ...overrides,
      },
      {
        title: 'Pure Line',
        description: 'Découvrez la gamme de climatiseur par évaporation Rafy de Pureline',
        startDate: '2021-01-01T00:00',
        endDate: '2021-01-02T00:00',
        ...overrides,
      },
      {
        title: ' Cristel',
        description: 'Depuis plus de 30 ans, Cristel fabrique des articles de cuisson',
        startDate: '2021-01-01T00:00',
        endDate: '2021-01-02T00:00',
        ...overrides,
      },
    ];
  }
}
