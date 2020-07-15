import { FormControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms'

import { JcInputOptions } from '../models/jc-input-options/jc-input-options';

export enum JcFormControlTypes {
    text = 'text',
    number = 'number',
    dropdown = 'dropdown',
    datepicker = 'datepicker',
    slider = 'slider',
    wysiwyg = 'wysiwyg'
}

export class JcFormControl extends FormControl {
    
    name: string;
    type: JcFormControlTypes;
    options: JcInputOptions;

    constructor(
        type: JcFormControlTypes,
        formState?: any,
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
            super(formState, validatorOrOpts, asyncValidator);
            this.type = type;
        }

    addOptions(options: JcInputOptions) {
        this.options = options;
    }
    
}