import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  
    authObs = this.authenticationService.sign(this.loginForm.value.email, this.loginForm.value.password)
   authObs.subscribe(
    (response) => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }
  );
  }
}
