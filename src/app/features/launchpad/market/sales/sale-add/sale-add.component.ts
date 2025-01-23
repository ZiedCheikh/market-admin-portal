import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SaleNewComponent } from '../_components/sale-new/sale-new.component';
import { SaleListComponent } from '../_components/sale-list/sale-list.component';

@Component({
  selector: 'app-sale-add',
  templateUrl: './sale-add.component.html',
  styleUrl: './sale-add.component.scss',
  imports: [SaleNewComponent, SaleListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleAddComponent {
  title = 'Sale add Startup Market';
}
