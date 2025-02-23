import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator to check if `dateControl` is after `compareControl`.
 */
export function dateAfterValidator(compareControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // Allow empty values (handled by required validator)

    const currentDate = new Date(control.value);
    const compareDateControl = control.parent?.get(compareControlName);

    if (!compareDateControl || !compareDateControl.value) return null; // No comparison date set

    const compareDate = new Date(compareDateControl.value);

    return currentDate > compareDate
      ? null // ✅ Valid
      : { dateAfter: `Date must be after ${compareDateControl.value}` }; // ❌ Invalid
  };
}
