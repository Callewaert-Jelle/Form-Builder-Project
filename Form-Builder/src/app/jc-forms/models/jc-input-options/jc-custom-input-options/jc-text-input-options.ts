import { JcInputOptions } from '../jc-input-options';
import { DynamicTextInputTypes } from '../../../fields/inputs/dynamic-text-input/dynamic-text-input.component';

export class JcTextInputOptions extends JcInputOptions {

    placeholder?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    hasAutocomplete?: boolean;
    type?: DynamicTextInputTypes;
    pattern?: RegExp;

    addPlaceholder(placeholder: string): JcTextInputOptions {
        this.placeholder = placeholder;
        return this;
    }
    makeDisabled(): JcTextInputOptions {
        this.isDisabled = true;
        return this;
    }
    makeReadonly(): JcTextInputOptions {
        this.isReadonly = true;
        return this;
    }
    enableAutocomplete(): JcTextInputOptions {
        this.hasAutocomplete = true;
        return this;
    }
    addType(type: DynamicTextInputTypes): JcTextInputOptions {
        this.type = type;
        return this;
    }
    addPattern(pattern: RegExp): JcTextInputOptions {
        this.pattern = pattern;
        return this;
    }
}