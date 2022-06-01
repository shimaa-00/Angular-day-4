import { Component, OnInit } from '@angular/core';
import { ILogin } from '../models/i-login';
import { IUser } from '../models/i-user';
import { UsersService } from '../user-service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:ILogin={username:'',password:''};
  users?: IUser[];
  res: any ;
  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsers().subscribe(x => {
      this.users = x;
    })
  }

  login(userdata:ILogin){
    this.res = this.users?.find(({username}) => username === userdata.username);
    console.log(this.res);
  }
}
