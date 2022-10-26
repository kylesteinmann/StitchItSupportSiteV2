import { Subject, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';

interface AuthReponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken:string;
  expiresIn:string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = new Subject<User>();

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    return this.http.post<AuthReponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw6qHfn5hocHXq87SIGqTfiD87fa81woM',
    {email: email,
    password: password,
    returnSecureToken:true}
    )


  }



}
