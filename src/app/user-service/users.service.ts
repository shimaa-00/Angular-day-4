import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private Httpclient:HttpClient) { }

  getUsers(){
    return this.Httpclient.get<IUser[]>('https://fakestoreapi.com/users')
  }
}
