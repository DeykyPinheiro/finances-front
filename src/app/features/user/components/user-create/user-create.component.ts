import { Component } from '@angular/core';
import { UserSaveDto } from '../../model/user-save-dto';
import { matchValidator } from 'src/app/shared/validators/match.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserDto } from '../../model/user-dto';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]],
      email: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(120), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120),]],
      birthDate: ["", [Validators.required]]
    }, {
      validators: [matchValidator('password', 'confirmPassword')]
    })
  }

  onSubmit(): void {
    if (this.form.valid) {

      const userSaveDto: UserSaveDto = {
        name: this.form.value.name,
        password: this.form.value.password,
        email: this.form.value.email,
        birthDate: this.form.value.birthDate
      };

      this.userService.save(userSaveDto).subscribe((useDto: UserDto) => {
        // TODO remover
        console.log(JSON.stringify(useDto));
      })
    }
  }


  teste(): void {
    console.log("this.form.errors: " + JSON.stringify(this.form.errors));

  }

}
