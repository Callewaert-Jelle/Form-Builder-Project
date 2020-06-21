import { ValidatorFn } from '@angular/forms';

export class JcInputOptions {

    private label?: string;
    private value?: any;
    private validators?: ValidatorFn;

    constructor(label: string, value: string) {
        this.label = label;
        this.value = value;
    }
    addValidators(validators: ValidatorFn) {
        this.validators = validators;
        return this;
    }

    getLabel(): string {
        return this.label;
    }
    getValue(): any {
        return this.value;
    }
    getValidators(): ValidatorFn {
        return this.validators;
    }
}