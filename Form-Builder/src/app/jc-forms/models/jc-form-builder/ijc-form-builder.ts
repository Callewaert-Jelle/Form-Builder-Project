import { JcTextInputOptions } from './../jc-input-options/jc-custom-input-options/jc-text-input-options'

export interface IJcFormBuilder {
    addTextInput(name: string, options: JcTextInputOptions);
    // addNumberInput(name: string, options: JcNumberInputOptions);
    // more
}