import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SalesState } from '../../_store/sale.reducer';
import { AddSaleAction } from '../../_store/sale.actions';

@Component({
  selector: 'app-sale-new',
  templateUrl: './sale-new.component.html',
  styleUrl: './sale-new.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleNewComponent {
  title = 'Sale new Startup Market';

  submissionStatus = signal<string | null>(null);
  saleForm: FormGroup;

  private store = inject(Store<{ sales: SalesState }>);

  constructor(private fb: FormBuilder) {
    this.saleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      category: [''],
    });
  }

  onSubmit(): void {
    if (this.saleForm.valid) {
      const saleData = this.saleForm.value;
      this.store.dispatch(new AddSaleAction(saleData));
      // Simulate submission success
      this.submissionStatus.set('Sale successfully added!');
      this.saleForm.reset();
    } else {
      this.submissionStatus.set('Please fill all required fields.');
    }
  }
}
