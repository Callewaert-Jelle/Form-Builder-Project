import { ValidatorFn } from '@angular/forms';

export class JcInputOptions {

    private label?: string;
    private value?: any;
    private validators?: ValidatorFn;

    addLabel(label: string) {
        this.label = label;
        return this;
    }
    addValue(value: any) {
        this.value = value;
        return this;
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