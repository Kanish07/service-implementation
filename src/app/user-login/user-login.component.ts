import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  formSubmitted = false;
  errorMessage!: string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  userlogin(user:User){
    console.log(user);
    this.userService.userLogin(user).subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

}
