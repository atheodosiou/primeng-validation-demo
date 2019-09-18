import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem, MessageService } from 'primeng/api';
import { ValidationService } from './shared/services/validation.service';
import { MockServerService } from './shared/services/mock-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, ValidationService, MockServerService]
})
export class AppComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  cols: any[] = [
    { header: 'Field', field: 'field', width: '' },
    { header: 'Required', field: 'isRequired', width: '' },
    { header: 'Optional', field: 'isOptional', width: '' },
    { header: 'Without Check', field: 'isNothing', width: '' }
  ];

  formsCols: any[] = [
    { header: 'Form ID', field: 'id', width: '50px' },
    { header: 'Description', field: 'description', width: '' }
  ];

  forms: any[];
  selectedForm: any;

  fields: any[];
  selectedField: any;

  constructor(private fb: FormBuilder, private messageService: MessageService, public validationService: ValidationService, private server: MockServerService) { }

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

    this.server.getData().subscribe(res => {
      console.log(res);
      this.forms = res.groups[0].forms;
      // this.fields = res.forms[0].fields;
    })
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
  }


  onFormSelect(form: any) {
    console.log(form.data)
    this.fields = form.data.fields;
    this.selectedForm = form.data;
  }

  onFieldSelect(field: any) {
    console.log(field.data)
    this.selectedField = field.data;
  }
  get diagnostic() { return JSON.stringify(this.userform.value); }
}
