import express from "express";
import ApiResponse from "../domain/api-response";
import SystemError from "../domain/errors/system-error";


const handleError = (err: SystemError, req: express.Request, res: express.Response, next: express.NextFunction) => {

    if(err !== null || err !== undefined) {
        res.status(err.status || 500);
        res.send(new ApiResponse(err.data, err.message, true, err.code))
        res.end();
    } else {
        next();
    }
}

export default handleError;