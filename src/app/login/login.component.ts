import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, finalize } from 'rxjs';

import { AuthResponseData } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  f: any;
  error: any;
  // formBuilder!: FormBuilder;

  constructor (private authenticationService:AuthenticationService , private router:Router,private formBuilder: FormBuilder,){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
      
  }

  submitted = false;
  loading = false;
  loginForm!:FormGroup
  requestLoading =false;
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    this.loading = true;
    this.requestLoading = true;
    let authObs: Observable<AuthResponseData>
  
    authObs = this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
   authObs.subscribe(
    (response) => {
      console.log(response);
      this.router.navigate(['/land']);
    }
  );
  }

}
