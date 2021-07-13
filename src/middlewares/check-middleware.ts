import express from "express";
import SystemResultCode from "../domain/enums/system-result-code";
import BadRequest from "../domain/errors/bad-request";



const checkXApiKey = (req: express.Request, res: express.Response, next: express.NextFunction) =>  {


    const xApiKey = req.headers["x-api-key"];
    const realXApiKey = process.env.X_API_KEY;
    
    if (!xApiKey){
        throw new BadRequest("Not found x-api-key", SystemResultCode.NOT_FOUND_API_KEY)
    } else if (xApiKey !== realXApiKey) {
        throw new BadRequest("Invalid x-api-key", SystemResultCode.INVALID_API_KEY, xApiKey);
    } else {
        next();
    }
}

export default checkXApiKey;