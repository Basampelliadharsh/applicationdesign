import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Signin } from './signin/signin';
import { Homepage } from './homepage/homepage';
import { Libsignin } from './libsignin/libsignin';
import { Libsignup } from './libsignup/libsignup';
import { Libhomepage } from './libhomepage/libhomepage';
import { ProfileFormPractice } from './profile-form-practice/profile-form-practice';

export const routes: Routes = [
  { path: 'homepage', component: Homepage },
  { path: 'signup', component: Signup },
  { path: 'signin', component: Signin },
  { path: 'libhomepage', component: Libhomepage },
  { path: 'libsignup', component: Libsignup },
  { path: 'libsignin', component: Libsignin },
  { path: 'profile-form-practice', component: ProfileFormPractice },
];
