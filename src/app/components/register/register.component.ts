import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Changed 'styleUrl' to 'styleUrls'
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      firstName: [''], // Changed 'username' to 'firstName'
      lastName: [''], // Added 'lastName' field
      email: [''], // Added 'email' field
      password: [''], // Changed 'password' to 'password'
      role: [''] // Added 'role' field
    });
  }

  handleRegister(): void {
    console.log(this.formRegister.value); // Logging the entire form values
  }
}
