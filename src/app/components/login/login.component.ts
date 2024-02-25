import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService){

  }

  ngOnInit(): void {
      this.formLogin = this.fb.group({
        email : this.fb.control(""),
        password : this.fb.control("")
      })
  }

  handleLogin(){
    console.log(this.formLogin.value)
    this.
    authService.
    login(this.formLogin.value.email, this.formLogin.value.password).
    subscribe(response => {
      this.authService.loadUser(response);
      this.router.navigateByUrl("/competition");
    },
    error=>console.log(error)
    )
    
  }
}
