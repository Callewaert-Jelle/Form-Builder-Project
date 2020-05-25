import { FormGroup } from '@angular/forms'
import { JcFormControl } from './jc-form-control'

export class JcFormGroup extends FormGroup {

    controls: {[key: string]: JcFormControl}

    get (controlName: string): JcFormControl {
        return <JcFormControl> super.get(controlName);
    }
}