import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  genders: [
    'male',
    'female'
  ];
  constructor() {
    this.myForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl('Srini', Validators.required),
        "email": new FormControl('srini@yahoo.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      "password": new FormControl('test', Validators.required),
      "gender": new FormControl('male')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
