import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs'; 

@Component({
  selector: 'app-employee-pro',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-pro.html',
  styleUrls: ['./employee-pro.css'],
})
export class EmployeePro {
  employeeForm = new FormGroup({
    fullName: new FormControl('', [Validators.required,  Validators.required,
  Validators.pattern('^[a-zA-Z ]+$')
]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
Linkdin: new FormControl('', [Validators.required, Validators.pattern('.*linkedin\\.com.*')
]),
Experience: new FormControl('', [Validators.required, Validators.minLength(1)]),
company: new FormControl('', [Validators.required]),
CTC: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
Notice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
street: new FormControl('', [Validators.required]),
city: new FormControl('', [Validators.required]),
state: new FormControl('', [Validators.required]),
zip: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{6}$')
]),
skills: new FormArray([]),

  })
  constructor() {}
get skills() {
  return this.employeeForm.get('skills') as FormArray;  


}
addSkill(skill: string) {
  if (skill.trim() !== '') {
    this.skills.push(new FormControl(skill, Validators.required));
  }
}
removeSkill(index: number) {
  this.skills.removeAt(index);
} 
onSubmit() {
  console.log("Submitted clicked");
  console.log(this.employeeForm.value);
  console.log("Valid:", this.employeeForm.valid);
  console.log("Errors:", this.employeeForm.errors);
  console.log(this.employeeForm);

  if (this.employeeForm.valid) {
    console.log('Form Submitted', this.employeeForm.value);
  } else {
    console.log('Form is invalid');
    this.employeeForm.markAllAsTouched();
  }
}
}
