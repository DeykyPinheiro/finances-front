import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]],
      email: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(120), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120),]],
      birthDate: ["", [Validators.required]]
    }, {
      validators: [this.match('password', 'confirmPassword')]
    })
  }

  // serve para confirmar ver se as duas senhas são iguais
  private match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  onSubmit(): void {
    // console.log("erros: " + this.form.errors);
  }


  teste(): void {
    console.log("this.form.errors: " + JSON.stringify(this.form.errors));

  }
}
