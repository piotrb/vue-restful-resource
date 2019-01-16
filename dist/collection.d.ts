import { DataType, IdType, RequestStatus, Resource } from './resource';
import * as tsx from 'vue-tsx-support';
export interface CollectionProps {
    label?: string;
    name: string;
    filter?: any;
    seed?: any;
}
export declare class Collection<T extends DataType> extends tsx.Component<CollectionProps> {
    label?: string;
    name: string;
    filter: any;
    seed: any;
    data: T[];
    status: RequestStatus;
    formStatus: RequestStatus;
    _resource: Resource<T> | null;
    created(): void;
    render(): JSX.Element;
    mounted(): Promise<void>;
    sync_data(): void;
    get(id: IdType): Promise<T>;
    refresh(): Promise<void>;
    create(data: T): Promise<T>;
    update(id: IdType, data: T): Promise<T>;
    delete(id: IdType): Promise<any>;
    member_get(id: IdType, action: string): Promise<any>;
    member_post(id: IdType, action: string, data: DataType): Promise<any>;
    onStatusChange(): void;
    onSeedChange(): Promise<void>;
}
