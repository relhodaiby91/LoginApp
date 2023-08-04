export enum Languages{
    AR = "ar",
    EN = "en"
}

export function getLang(language: string): Languages {
if(language == 'ar')
    return Languages.AR;
else if(language == 'en')
    return Languages.EN;
else
    return Languages.EN;
}