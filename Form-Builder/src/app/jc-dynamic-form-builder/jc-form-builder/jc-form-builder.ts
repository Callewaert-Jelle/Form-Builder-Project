import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

export class JcFormBuilder {

    formArray: FormArray;

    constructor(private formBuilder: FormBuilder) {
        this.formArray = this.formBuilder.array([]);
        return this;
    }

    addTextInput(name: string) {
        this.formArray.controls.push(new FormControl('', Validators.required));
        return this;
    }

    getResult() {
        return this.formArray;
    }
}