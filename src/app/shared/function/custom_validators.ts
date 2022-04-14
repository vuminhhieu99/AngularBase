import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

// import * as zxcvbn from 'zxcvbn';

// setup simple regex for white listed characters
const validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
const validssnKey = /[A-Z]{1}[0-9]{4}_[A-Z]{1}[A-Za-z]{2,}_[A-Z]{1}[A-Za-z]{2,}(_[A-Z]{1}[A-Za-z]{0,})?/gm;
const validPhone = /\d{10,}/;
const validssn = /\d{3}[\-]\d{2}[\-]\d{4}/;

// create your class that extends the angular validator class
export class CustomValidators extends Validators {

    static validateEmail(control: FormControl) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        return regex.test(control.value) ? null : { email: true };
    }

    static validatessnKey(control: FormControl) {

        return validssnKey.test(control.value) ? null : { ssnKey: true };
    }

    static validatePhone(control: FormControl) {

        return validPhone.test(control.value) ? null : { validPhone: true };
    }

    static validatessn(control: FormControl) {

        return validssn.test(control.value) ? null : { ssn: true };
    }

    static validatePassword(control: FormControl) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return regex.test(control.value) ? null : { password: true };
    }

    static validateCharacters(control: FormControl) {
        if (control.value && control.value.length > 0) {
            const matches = control.value.match(validCharacters);
            return matches && matches.length ? { invalid_characters: matches } : null;
        } else {
            return null;
        }
    }

}