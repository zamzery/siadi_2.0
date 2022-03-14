import { FormGroup } from "@angular/forms";

export class functions {
    static invalidField(field:string,loginForm:FormGroup,formSubmit:boolean):boolean{
        if(formSubmit && loginForm.controls[field].invalid) {
            return true;
        } else {
            return false;
        }
    }
}