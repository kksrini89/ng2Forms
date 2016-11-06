import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    name: 'srini',
    email: 'srini@gmail.com',
    password: 'test'
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
  }

}
