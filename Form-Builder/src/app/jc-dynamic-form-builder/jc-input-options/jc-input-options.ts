export class JcInputOptions {

    private label?: string;
    private value?: any;

    addLabel(label: string) {
        this.label = label;
    }
    addValue(value: any) {
        this.value = value;
    }
}