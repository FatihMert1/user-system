import SystemResultCode from "./enums/system-result-code";


interface IApiResponse<T> {
    data: T,
    message: string,
    error: boolean,
    code: SystemResultCode
}


class ApiResponse<T> implements IApiResponse<T> {
    
    data: T;
    message: string;
    error: boolean;
    code: SystemResultCode;


    constructor(data: T, message: string, error: boolean, code: SystemResultCode) {
        this.data = data;
        this.message = message;
        this.error = error;
        this.code = code;
    }


}


export default ApiResponse;