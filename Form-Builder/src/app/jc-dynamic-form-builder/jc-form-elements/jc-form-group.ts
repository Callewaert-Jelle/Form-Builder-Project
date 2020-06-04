import { FormGroup } from '@angular/forms'
import { JcFormControl } from './jc-form-control'
import { JcInputOptions } from '../jc-input-options/jc-input-options';

export class JcFormGroup extends FormGroup {

    controls: {[key: string]: JcFormControl}

    get (controlName: string): JcFormControl {
        return <JcFormControl> super.get(controlName);
    }
}