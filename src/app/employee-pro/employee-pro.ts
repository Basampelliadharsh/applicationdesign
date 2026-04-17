import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs'; 

@Component({
  selector: 'app-employee-pro',
  imports: [CommonModule ],
  templateUrl: './employee-pro.html',
  styleUrl: './employee-pro.css',
})
export class EmployeePro {
  employeeForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    dateofbirth: new FormControl('', [Validators.required]),  
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
linkdin: new FormControl('', [Validators.required, Validators.pattern('^(https?://)?(www\\.)?linkedin\\.com/.*$')]),
Experience: new FormControl('', [Validators.required, Validators.minLength(1)]),
company: new FormControl('', [Validators.required]),
CTC: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
Notice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
street: new FormControl('', [Validators.required]),
city: new FormControl('', [Validators.required]),
state: new FormControl('', [Validators.required]),
zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
skills: new FormArray([]),

  })

}
