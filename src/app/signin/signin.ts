import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  
  onSubmit() {
    // Handle form submission logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}
