import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from '../models/i-photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private Httpclient:HttpClient) { }

  getPhotos(){
    return this.Httpclient.get<IPhoto[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
  }
}
