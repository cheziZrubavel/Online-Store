import { UsersService } from 'src/app/services/users.service';
import { UserModel } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  public registerForm: FormGroup;
  public submitted = false;
  public submitted2 = false;
  public resIdentity: boolean;
  public registerForm2: FormGroup;
  public allFormDetails: UserModel;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identity: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(registerFormValue: FormGroup) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    };

    // check if identity already exist
    const identityObj = { "identity": registerFormValue.value.identity };
    this.userService.checkIdentity(identityObj)
      .subscribe(
        res => {
          this.resIdentity = true;
        },
        // If already exist
        err => {
          if (err.status === 403) {
            this.resIdentity = false;
            this.f.identity.setErrors({ identityExist: true });
          } else { alert(err.message); }
        },
        () => {
          // check if passwords match
          if (registerFormValue.value.password !== registerFormValue.value.confirmPassword) {
            this.f.confirmPassword.setErrors({ confirmErr: true });
            return;
          };
          // if valid, move to form 2
          delete registerFormValue.value.confirmPassword;
          this.allFormDetails = registerFormValue.value;
          this.registerForm2 = new FormBuilder().group({
            city: ['', Validators.required],
            street: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
          });
        }
      );
  };

  // convenience getter for easy access to form fields
  get f2() { return this.registerForm2.controls; }

  onSubmit2(registerFormValue2: FormGroup) {
    this.submitted2 = true;
    // stop here if form is invalid
    if (this.registerForm2.invalid) {
      return;
    };
    registerFormValue2.value["role"] = "customer";
    this.allFormDetails = Object.assign(this.allFormDetails, registerFormValue2.value);
    this.userService.registerUser(this.allFormDetails).subscribe(
      res => {
        alert("user added:" + JSON.stringify(res));
        this.router.navigateByUrl("/login");
      },
      err => alert(err.message)
    );
  };
}
