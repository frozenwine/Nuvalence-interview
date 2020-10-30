import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, ValidationErrors, FormControl, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[equalValidatorDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true}
    ]
})
export class EqualValidatorDirective implements Validator {

    @Input('compareField') compareField : string;

    validate(control : FormControl) : ValidationErrors {
        return this.compareField ? EqualValidation(this.compareField)(control) : null;
    }
}

export function EqualValidation(compareField: string): ValidatorFn {
    return (control : FormControl) : ValidationErrors => {
        var value = control.value;
        if(!value || value == ''){
            return null;
        }
        var compareValue = control.root.get(compareField).value;
        const valid = compareValue == value;
        return !valid ? {'equal': {value: false}} : null;
    }
}