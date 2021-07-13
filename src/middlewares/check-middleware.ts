import express from "express";
import SystemResultCode from "../domain/enums/system-result-code";
import BadRequest from "../domain/errors/bad-request";



const checkXApiKey = (req: express.Request, res: express.Response, next: express.NextFunction) =>  {


    const xApiKey = req.headers["x-api-key"];
    const realXApiKey = process.env.X_API_KEY;
    
    if (xApiKey !== realXApiKey) {
        throw new BadRequest("Invalid x-api-key", SystemResultCode.INVALID_API_KEY);
    } else {
        next();
    }
}

export default checkXApiKey;