import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

constructor(private router: Router){}
  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('confirmPassword:', this.confirmPassword);
    this.router.navigate(['/homepage']);
  }

  togglePassworddivisibility() {}
}
