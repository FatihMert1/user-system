import express from "express";
import translator from "../i18n/translator";

const selectLanguage = (req: express.Request, res: express.Response, next: express.NextFunction) => {


    const lang = req.headers["accept-language"] ?? "tr";

    translator.setLanguage(lang);

    next();
}


export default selectLanguage;