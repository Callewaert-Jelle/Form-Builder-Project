import { FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { JcFormControl } from '../jc-form-elements/jc-form-control';
import { JcFormGroup } from '../jc-form-elements/jc-form-group';
import { JcTextInputOptions } from '../jc-input-options/jc-custom-input-options/jc-text-input-options';
import { IJcFormBuilder } from './ijc-form-builder';

export class JcFormBuilder implements IJcFormBuilder {

    private jcFormGroup: JcFormGroup;

    constructor() {
        this.jcFormGroup = new JcFormGroup({});
        return this;
    }

    addTextInput(name: string, options?: JcTextInputOptions): JcFormBuilder {
        if (options) {
            let jcFormControl = new JcFormControl(options.getValue(), [Validators.required]);
            jcFormControl.addOptions(options);
            this.jcFormGroup.addControl(name, jcFormControl)
        } else { //empty formcontrol
            this.jcFormGroup.addControl(name, new JcFormControl('', Validators.required));
        }
        return this;
    }

    getResult(): JcFormGroup {
        return this.jcFormGroup;
    }
}