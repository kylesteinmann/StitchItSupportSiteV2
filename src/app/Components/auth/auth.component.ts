import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService:AuthService) { }


onSubmit(form:NgForm){
  if(!form.valid){
    return;
  }
  const email = form.value.email;
  const password = form.value.password;

  this.authService.login(email,password).subscribe();
form.reset()
}
}
