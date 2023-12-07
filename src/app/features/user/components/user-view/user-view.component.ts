import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserListDto } from '../../model/user-list-dto';
import { Page } from 'src/app/core/auth/models/page/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  listUser: UserListDto[] = [];

  ngOnInit(): void {
    this.userService.list().subscribe((page: Page<UserListDto>) => {
      this.listUser = page.content;
    })
  }

  editUser(userId: number) {
    this.router.navigate([`user-edit/${userId}`])
  }


  deleteUser(userId: number) {
    this.router.navigate([`user-delete/${userId}`])
  }




}
