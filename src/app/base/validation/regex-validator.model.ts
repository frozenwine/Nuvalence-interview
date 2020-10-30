
export class RegExValidatorModel {

    type: string;
    regex : RegExp;

    constructor(type : string, regex : RegExp){
        this.type = type;
        this.regex = regex;
    }
}