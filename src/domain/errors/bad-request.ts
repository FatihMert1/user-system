import SystemResultCode from "../enums/system-result-code";
import SystemError from "./system-error";

class BadRequest extends SystemError {
    constructor(message: string, code: SystemResultCode = SystemResultCode.BAD_REQUEST, data: any = null) {
        super(message, code, 400, data);
        console.error(`Request is not valid [Bad Request] : ${message}`);
        
    }
}


export default BadRequest;