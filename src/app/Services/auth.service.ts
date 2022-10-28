import { BehaviorSubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Router } from '@angular/router';

interface AuthReponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  isAuthenticated = false

  constructor(private http: HttpClient, private router:Router) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthReponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw6qHfn5hocHXq87SIGqTfiD87fa81woM',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        tap((responseData) => {
          const expirationDate = new Date(
            new Date().getTime() + +responseData.expiresIn * 1000
          );
          const user = new User(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            expirationDate
          );
          this.user.next(user);


        })
      );
  }
}
