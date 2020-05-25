import { FormControl } from '@angular/forms'

export enum JcFormControlTypes {
    text = 'Text',
    number = 'Number'
    // more
}

export class JcFormControl extends FormControl {
    
    type: JcFormControlTypes;
}