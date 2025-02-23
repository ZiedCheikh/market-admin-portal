import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SalesState } from '../../_store/sale.reducer';
import { AddSaleAction } from '../../_store/sale.actions';
import { Sale } from '../../_models/sale.model';
import { dateAfterValidator } from '../../../../../../shared/validators/date.after.validator';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale.create.component.html',
  styleUrl: './sale.create.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleCreateComponent {
  title = 'Sale create Startup Market';

  submissionStatus = signal<string | null>(null);
  saleForm: FormGroup;

  private store = inject(Store<{ sales: SalesState }>);

  constructor(private fb: FormBuilder) {
    this.saleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required, dateAfterValidator('startDate')]],
    });
  }

  onSubmit(): void {
    if (this.saleForm.valid) {
      const saleData = this.saleForm.value;
      const sale: Sale = {
        title: saleData.title,
        description: saleData.description,
        startDate: saleData.startDate,
        endDate: saleData.endDate,
      };
      this.store.dispatch(new AddSaleAction(sale));
      this.submissionStatus.set('Sale successfully added!');
      this.saleForm.reset();
    } else {
      this.submissionStatus.set('Please fill all required fields.');
    }
  }
}
