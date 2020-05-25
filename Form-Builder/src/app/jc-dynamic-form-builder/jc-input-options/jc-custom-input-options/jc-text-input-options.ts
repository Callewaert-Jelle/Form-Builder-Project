import { JcInputOptions } from '../jc-input-options';

export class JcTextInputOptions extends JcInputOptions {

    placeholder?: string;

    addPlaceholder(placeholder: string) {
        this.placeholder = placeholder;
    }
}