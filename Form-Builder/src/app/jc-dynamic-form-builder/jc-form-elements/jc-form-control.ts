import { FormControl } from '@angular/forms'
import { JcInputOptions } from '../jc-input-options/jc-input-options';

export enum JcFormControlTypes {
    text = 'Text',
    number = 'Number'
    // more
}

export class JcFormControl extends FormControl {
    
    type: JcFormControlTypes;
    options: JcInputOptions;

    addOptions(options: JcInputOptions) {
        this.options = options;
    }
}