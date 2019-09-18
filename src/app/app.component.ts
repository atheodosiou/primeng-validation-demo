import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem, MessageService } from 'primeng/api';
import { ValidationService } from './shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, ValidationService]
})
export class AppComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  cols: any[] = [
    { header: 'Required', field: 'required' },
    { header: 'Optional', field: 'optional' },
    { header: 'Without Check', field: 'withoutCheck' }
  ]
  constructor(private fb: FormBuilder, private messageService: MessageService, public validationService: ValidationService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      firstname: new FormControl('Tasos', Validators.required),
      lastname: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl(''),
      gender: new FormControl('', Validators.required)
    });

    this.validationService.form = this.userform;

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });
  }

  onSubmit(value: string) {
    console.log(this.validationService.form);
    console.log(this.validationService.formControls);

    //   this.submitted = true;
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted', sticky: true });
  }

  resetForm() {
    this.validationService.resetForm();
  }
  revertForm() {
    this.validationService.revertForm();
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }
}
