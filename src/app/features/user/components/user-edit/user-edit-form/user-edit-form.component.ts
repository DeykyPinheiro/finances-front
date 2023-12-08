import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserUpdateDto } from '../../../model/user-update-dto';
import { UserDto } from '../../../model/user-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]],
      email: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(120), Validators.email]],
      birthDate: ["", [Validators.required]]
    })
  }

  userId!: number;


  // userDto!: UserDto;



  ngOnInit(): void {



    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });

    this.userService.findById(this.userId).subscribe((userDto: UserDto) => {
      let date = new Date(userDto.birthDate);

      this.form.patchValue({
        name: userDto.name,
        email: userDto.email,
        birthDate: date.toISOString().split('T')[0],
      });
    })

  }



  onSubmit(): void {
    if (this.form.valid) {

      const userUpdateDto: UserUpdateDto = {
        name: this.form.value.name,
        email: this.form.value.email,
        birthDate: this.form.value.birthDate
      };

      this.userService.update(this.userId, userUpdateDto).subscribe((useDto: UserDto) => {
        // retirar depois
        console.log(`atualizado ${useDto}`);
      })
    }
  }

}
