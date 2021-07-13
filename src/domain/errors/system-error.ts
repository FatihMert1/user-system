import SystemResultCode from "../enums/system-result-code";

export interface ISystemError extends Error {
    code: SystemResultCode
    status: number
    data: any
}


class SystemError implements ISystemError {
    data: any;
    code: SystemResultCode;
    status: number;
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string, code: SystemResultCode, status: number, data: any = null) {
        this.code = code;
        this.status = status;
        this.data = data;
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);

        console.error(`[System Error Message] : ${message}, the data is -> `, data)
    }
}

export default SystemError;