import { ValidationErrors, AbstractControl } from "@angular/forms";
export class TelephoneValidator {

    static isValid(control: AbstractControl): ValidationErrors | null {
        const re = /^(0(\d{3}) (\d{3}) (\d{2}) (\d{2}))$/.test(control.value);

        if (re) {
            return null;
        }
        return {
            isValid: true
        };
    }
}