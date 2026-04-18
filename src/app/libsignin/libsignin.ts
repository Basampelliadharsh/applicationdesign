import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';  

@Component({
  standalone: true,
  selector: 'app-lib-signin',
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './libsignin.html',
  styleUrl: './libsignin.css',
})
export class Libsignin {
  submitted = false;
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), 

  
  }
  );
  constructor(private router: Router) {
    console.log('Signin form initialized:', this.registrationForm);
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }else{
      console.log('Signin payload:', this.registrationForm.value);
      this.router.navigate(['/libsignup']);
      
      // https://localhost:4200/signup
    } 
    
  }

  
}