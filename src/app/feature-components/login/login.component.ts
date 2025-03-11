import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    if (email === 'asdbibsadu@sm.com' && password === 'ahkdsbaskdb') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', email); // Store username for Navbar
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Invalid credentials. Please try again.';
    }
  }

  // Getter for easy access to form controls
  get f() {
    return this.loginForm.controls;
  }
}
