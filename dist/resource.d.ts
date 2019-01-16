export declare type IdType = string | number;
export declare type QueryType = any;
export declare type DataType = {
    [key: string]: any;
};
export interface ExecuteOptions {
    url: string;
    method?: 'get' | 'post' | 'delete' | 'put';
    body?: string;
    headers?: {
        [key: string]: any;
    };
}
export interface ResourceOptions {
    defaultQuery?: QueryType;
}
export interface RuntimeOptions {
    status?: (status: RequestStatus) => any;
    statusTo?: [any, string];
    queryParams?: QueryType;
    throwErrors?: boolean;
}
export interface RequestStatus {
    start?: boolean;
    ready?: boolean;
    busy?: boolean;
    error?: any;
}
export declare class Resource<T extends DataType> {
    resourceName: string;
    basePath: string;
    defaultQuery: QueryType;
    static commonHeaders: {
        'Content-Type': string;
    };
    constructor(resouceName: string, basePath: string, options?: ResourceOptions);
    query(options: QueryType, runtimeOptions?: RuntimeOptions): Promise<T[]>;
    create(data: T, runtimeOptions: RuntimeOptions): Promise<T>;
    update(id: IdType, data: T, runtimeOptions?: RuntimeOptions): Promise<T>;
    delete(id: IdType, runtimeOptions?: RuntimeOptions): Promise<any>;
    get(id: IdType, runtimeOptions?: RuntimeOptions): Promise<T>;
    member_get(id: IdType, action: string, runtimeOptions?: RuntimeOptions): Promise<any>;
    member_post(id: IdType, action: string, data: DataType, runtimeOptions?: RuntimeOptions): Promise<any>;
    _execute(options: ExecuteOptions, runtimeOptions?: RuntimeOptions): Promise<any>;
    private _signalStatus;
    private _buildUrl;
    private _handleResult;
}
