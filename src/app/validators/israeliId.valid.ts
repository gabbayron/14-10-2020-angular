import { AbstractControl } from "@angular/forms";
import isIsraeliIdValid from 'israeli-id-validator';

export default function israeliIdValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value.length != 9) {
        return { 'id': "Id Must Be 9 Digits" }
    }
    else if (!isIsraeliIdValid(control.value)) {
        return { "id": "Invalid Id" }
    }
    return null
}