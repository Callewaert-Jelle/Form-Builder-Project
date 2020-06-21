import { ValidatorFn } from '@angular/forms';

import { JcFormControl } from '../../extentions/jc-form-control';
import { JcFormGroup } from '../../extentions/jc-form-group';
import { JcTextInputOptions } from '../jc-input-options/jc-custom-input-options/jc-text-input-options';
import { IJcFormBuilder } from './ijc-form-builder';

export class JcFormBuilder implements IJcFormBuilder {

    private jcFormGroup: JcFormGroup;

    constructor() {
        this.jcFormGroup = new JcFormGroup({});
        return this;
    }

    addTextInput(name: string, options?: JcTextInputOptions, validators?: ValidatorFn | ValidatorFn[]): JcFormBuilder {
        if (options) {
            let jcFormControl = new JcFormControl(options.getValue(), validators);
            jcFormControl.addOptions(options);
            this.jcFormGroup.addControl(name, jcFormControl)
        } else { //empty formcontrol
            this.jcFormGroup.addControl(name, new JcFormControl('', validators));
        }
        return this;
    }

    getResult(): JcFormGroup {
        return this.jcFormGroup;
    }
}