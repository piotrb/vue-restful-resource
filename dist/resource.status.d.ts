import { RequestStatus } from './resource';
import * as tsx from 'vue-tsx-support';
export interface ResourceStatusProps {
    status: RequestStatus;
    label?: string;
}
export declare class ResourceStatus extends tsx.Component<ResourceStatusProps> {
    status: RequestStatus;
    label?: string;
    renderError(): JSX.Element;
    render(): JSX.Element;
}
