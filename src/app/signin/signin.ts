import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
})
export class Signin {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/signup']);
  }
  togglePassword(input: HTMLInputElement) {
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
}
