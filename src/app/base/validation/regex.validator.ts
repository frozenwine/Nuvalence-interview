import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, ValidationErrors, FormControl, ValidatorFn } from "@angular/forms";
import { RegExValidatorModel } from './regex-validator.model';

@Directive({
    selector: '[passwordValidatorDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true}
    ]
})
export class RegExValidatorDirective implements Validator {

    @Input('nameRe') nameRe : RegExValidatorModel;

    validate(control : FormControl) : ValidationErrors {
        return this.nameRe ? RegExValidation(this.nameRe)(control) : null;
    }
}

export function RegExValidation(nameRe: RegExValidatorModel): ValidatorFn {
    return (control : FormControl) : ValidationErrors => {
        var value = control.value;
        if(!value || value == ''){
            return null;
        }
        const valid = nameRe.regex.test(value);
        var errorObj = {};
        errorObj[nameRe.type] = {value: value};
        return !valid ? errorObj : null;
    }
}