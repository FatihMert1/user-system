import SystemResultCode from "../domain/enums/system-result-code";
import tr from "./messages/tr";
import en from "./messages/en";


interface ITranslator {

    lang: string

    setLanguage:(lang: string) => void;

    translate: (code: SystemResultCode) => string
}


class Translator implements ITranslator {
    lang: string = "tr";
    
    setLanguage = (lang: string) => {
        if (lang && lang != "")
            this.lang = lang;
    }

    translate = (code: SystemResultCode): string => {

        const words: any = getLocalization(this.lang);
        
        const word: string = SystemResultCode[code] || "";
        
        return words[word]
    }
}


const getLocalization = (lang: string): any => {

    if (lang === "tr") {
        return tr
    } else if(lang === "en") {
        return en
    } else {
        return tr
    }

}

const translator: ITranslator = new Translator();

export default translator;