import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray, FormControl, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { first, zip } from 'rxjs'; 

@Component({
  selector: 'app-event-registration-form',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './eventregform.html',
  styleUrl: './eventregform.css',
})
export class Eventregform {
  registrationForm = new FormGroup({
  attendeename: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
  age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
  gender: new FormControl('', [Validators.required]),
  organization: new FormControl('', [Validators.required]),
  designation: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  phonenumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  tickettype: new FormControl('', [Validators.required]),
  mealpreference: new FormControl('', [Validators.required]),
  emergencycontact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  venuecity: new FormControl('', [Validators.required]),
  travellingfrom: new FormControl('', [Validators.required]),
  accomodationrequired: new FormControl('', [Validators.required]),
  zipcode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
  addinterest: new FormArray([]),
  });
  constructor() { }
  get addinterest() {
    return this.registrationForm.get('addinterest') as FormArray;
  }
  addInterest(interest: string) {
    if(interest.trim() !== '') {
      this.addinterest.push(new FormControl(interest, Validators.required));
    }
  }
  removeInterest(index: number) {
    this.addinterest.removeAt(index);
  }
 onSubmit() {
  console.log(this.registrationForm.value);
  console.log('Valid:', this.registrationForm.valid);

  Object.keys(this.registrationForm.controls).forEach(key => {
    const control = this.registrationForm.get(key);
    console.log(key, control?.errors);
  });
}
}