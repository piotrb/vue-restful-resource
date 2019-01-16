import * as tsx from 'vue-tsx-support';
export interface ModelErrorProps {
    errors: any;
}
export declare class ModelError extends tsx.Component<ModelErrorProps> {
    errors: any;
    render(): JSX.Element;
}
