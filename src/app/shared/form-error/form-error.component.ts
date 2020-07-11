import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  /*
    Formgroup from parent component - for validation which are added inside the formgroup
  */
  @Input() group: FormGroup;

  /*
    Form control name of the formgroup - for validation in formgroup
  */
  @Input() controlName: string;

  /*
    Form control - for validation which are added inside the form control
  */
  @Input() control: FormControl;

  /*
    Validator Name - for both formgroup and formcontrol validaiton
  */
  @Input() validatorName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
