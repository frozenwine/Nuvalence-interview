import { FormGroup, FormControl } from '@angular/forms';
import { ErrorMessage } from './error-message';
import { ErrorType } from './error-type';

export class ValidateMessage {

    static getErrorMessage(fieldControl : FormControl){
        var errorMessage = '';
        if(fieldControl.hasError(ErrorType.Email)){
            errorMessage = ErrorMessage.Email;
        }else if(fieldControl.hasError(ErrorType.Integer)){
            errorMessage = ErrorMessage.Integer;
        }else if(fieldControl.hasError(ErrorType.Money)){
            errorMessage = ErrorMessage.Money;
        }else if(fieldControl.hasError(ErrorType.PhoneNumber)){
            errorMessage = ErrorMessage.PhoneNumber;
        }else if(fieldControl.hasError(ErrorType.Password)){
            errorMessage = ErrorMessage.Password;
        }else if(fieldControl.hasError(ErrorType.Equal)){
            errorMessage = ErrorMessage.Equal;
        }       
        else if(fieldControl.hasError(ErrorType.Required)){
            errorMessage = ErrorMessage.Required;
        }
        return errorMessage;
    }
}