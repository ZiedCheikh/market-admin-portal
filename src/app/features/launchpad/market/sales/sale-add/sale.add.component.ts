import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SaleCreateComponent } from '../_components/sale-create/sale.create.component';
import { SaleListComponent } from '../_components/sale-list/sale.list.component';

@Component({
  selector: 'app-sale-add',
  templateUrl: './sale.add.component.html',
  styleUrl: './sale.add.component.scss',
  imports: [SaleCreateComponent, SaleListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleAddComponent {
  title = 'Sale add Startup Market';
}
