import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  userId!: number;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }


  deleteUser(userId: number): void {
    this.userService.delete(userId).subscribe(() => {
      console.log('User deleted successfully');
    })
  }


}
