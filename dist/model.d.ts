import { DataType, Resource, RequestStatus } from './resource';
import * as tsx from 'vue-tsx-support';
export interface ModelProps {
    label?: string;
    name: string;
    id: string;
    action?: string;
    filter?: any;
    seed?: any;
}
export declare class Model<T extends DataType> extends tsx.Component<ModelProps> {
    label?: string;
    name: string;
    id: string;
    action?: string;
    filter: any;
    seed: any;
    status: RequestStatus;
    formStatus: RequestStatus;
    _resource: Resource<T> | null;
    created(): void;
    mounted(): Promise<void>;
    render(): JSX.Element;
    sync_data(data: T): void;
    refresh(): Promise<void>;
    update(data: T): Promise<void>;
    delete(): Promise<any>;
    onStatusChange(): void;
    onSeedChange(): Promise<void>;
}
