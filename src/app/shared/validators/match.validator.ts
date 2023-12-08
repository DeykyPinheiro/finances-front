import { AbstractControl, ValidatorFn } from '@angular/forms';

export const matchValidator = (controlName: string, checkControlName: string): ValidatorFn => {
    return (controls: AbstractControl) => {
        const control = controls.get(controlName);
        const checkControl = controls.get(checkControlName);

        // possui erros e os erros nao sao do tipo matching
        if (checkControl?.errors && !checkControl.errors['matching']) {
            return null;
        }

        // verifico se sao iguais
        if (control?.value !== checkControl?.value) {
            controls.get(checkControlName)?.setErrors({ matching: true });
            return { matching: true };
        } else {
            return null;
        }
    };
}