import express from "express";
import ApiResponse from "../domain/api-response";
import SystemError from "../domain/errors/system-error";
import translator from "../i18n/translator";


const handleError = (err: SystemError, req: express.Request, res: express.Response, next: express.NextFunction) => {

    if(err !== null || err !== undefined) {
        res.status(err.status || 500);
        const message = translator.translate(err.code);
        res.send(new ApiResponse(err.data, message, true, err.code))
        res.end();
    } else {
        next();
    }
}

export default handleError;