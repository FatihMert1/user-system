import SystemResultCode from "../enums/system-result-code";
import SystemError from "./system-error";

class BadRequest extends SystemError {
    constructor(message: string, code: SystemResultCode = SystemResultCode.BAD_REQUEST, data: any = null) {
        super(`Request is not valid [Bad Request] : ${message}`, code, 400, data);
        
    }
}


export default BadRequest;