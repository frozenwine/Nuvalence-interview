import { RegExValidatorModel } from './regex-validator.model';


export class REG_EX_CONSTANTS {

    public static PASSWORD = new RegExValidatorModel('password', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

    public static PHONE_NUMBER = new RegExValidatorModel('phone-number', /^[1]\d{10}$/);

    public static MONEY = new RegExValidatorModel('money', /^([0]|[1-9]\d*)(\.\d{1,2})?$/);

    public static TAX = new RegExValidatorModel('tax', /^([0]|[1-9]\d*)(\.\d{1,3})?$/);

    public static INTEGER = new RegExValidatorModel('integer', /^[1-9]\d*$/);

    
}