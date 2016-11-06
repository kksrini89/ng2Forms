import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      "username": new FormControl('Srini', Validators.required),
      "email": new FormControl('srini@yahoo.com', Validators.required),
      "password": new FormControl('test', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
