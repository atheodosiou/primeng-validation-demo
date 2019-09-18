import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  private _form: FormGroup;

  get form() {
    return this._form;
  }
  set form(value: FormGroup) {
    this._form = value;
  }

  get status() {
    return this._form.status;
  }
  get value() {
    return this._form.value;
  }
  get formControls() {
    return this._form.controls;
  }

  resetForm() {
    this._form.reset();
  }

}
