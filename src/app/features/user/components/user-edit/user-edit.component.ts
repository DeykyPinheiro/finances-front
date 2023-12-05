import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

  // teste pra saber se o auth fica disponivel para outras aplicoes
  // apagar quando for editar
  constructor(private authService: AuthService) {
  }

}
