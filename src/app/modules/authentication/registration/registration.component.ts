import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '@core/validators/validators';
import { Config } from '@app/config/config';
import { AuthenticationService } from '@app/core/services';
import { RegisterParams, RegisterResponse } from '@app/core/interfaces';

/**
 * @description Registration Form Component
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Creates Reactive form modal for the registration form.
   */
  createForm(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.pattern(Config.passwordPolicy)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: CustomValidators.confirmPassword()
    });
  }

  /**
   * Trigger register method of authentication service with params from the form.
   */
  register(): void {
    const registerParams: RegisterParams = { ...this.registrationForm.value };
    this.auth.register(registerParams).subscribe((response: RegisterResponse) => {

    });
  }

}
