import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators'
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {
  myForm: FormGroup;

  constructor
  (
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ],
      dni: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10)
        ]
      ],
      agree: [
        false,
        [
          Validators.requiredTrue
        ]
      ]
    });
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get dni() {
    return this.myForm.get('dni');
  }
  get agree() {
    return this.myForm.get('agree');
  }

  //Form State
  loading = false;
  success = false;

  async submitHandler() {
    console.log('zxczxczxcxz');
    this.loading = true;
    const formValue = this.myForm.value;
    /*try {
      await this.userService.sign_up(formValue);
      this.loading = false;
    } catch(err) {
      console.log(err);
    }*/
    this.userService.sign_up(formValue).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
