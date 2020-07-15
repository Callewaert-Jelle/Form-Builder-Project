import { ValidatorFn } from '@angular/forms';

import { JcFormControl, JcFormControlTypes } from '../../extentions/jc-form-control';
import { JcFormGroup } from '../../extentions/jc-form-group';
import { JcTextInputOptions } from '../jc-input-options/jc-custom-input-options/jc-text-input-options';
import { IJcFormBuilder } from './ijc-form-builder';
import { JcNumberInputOptions } from '../jc-input-options/jc-custom-input-options/jc-number-input-options';

export class JcFormBuilder implements IJcFormBuilder {

    private jcFormGroup: JcFormGroup;

    constructor() {
        this.jcFormGroup = new JcFormGroup({});
        return this;
    }

    addTextInput(name: string, options?: JcTextInputOptions, validators?: ValidatorFn | ValidatorFn[]): JcFormBuilder {
        if (options) {
            let jcFormControl = new JcFormControl(JcFormControlTypes.text, options.getValue(), validators);
            jcFormControl.addOptions(options);
            this.jcFormGroup.addControl(name, jcFormControl)
        } else { //empty formcontrol
            this.jcFormGroup.addControl(name, new JcFormControl(JcFormControlTypes.text, '', validators));
        }
        return this;
    }

    addNumberInput(name: string, options?: JcNumberInputOptions, validators?: ValidatorFn | ValidatorFn[]): JcFormBuilder {
        let jcFormControl = new JcFormControl(JcFormControlTypes.number, options.getValue(), validators);
    }

    getResult(): JcFormGroup {
        return this.jcFormGroup;
    }
}