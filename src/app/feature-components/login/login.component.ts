import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { env } from '../../../environments/environment-qa';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Add this getter to your LoginComponent class
  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === env.USERNAME && password === env.PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', email);
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Invalid credentials. Please try again.';
    }
  }
}
