import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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
  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   "userData": new FormGroup({
    //     "username": new FormControl('Srini', [Validators.required, this.customValidator]),
    //     "email": new FormControl('srini@yahoo.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    //   }),
    //   "password": new FormControl('test', Validators.required),
    //   "gender": new FormControl('male'),
    //   "hobbies": new FormArray([new FormControl('Cooking', Validators.required, this.asyncCustomValidator)])
    // });

    this.myForm = formBuilder.group({
      "userData": formBuilder.group({
        "username": ['Srini', [Validators.required, this.customValidator], this.asyncCustomValidator],
        "email": ['srini@yahoo.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      "password": ['test', Validators.required],
      "gender": ['male'],
      "hobbies": formBuilder.array([
        ['Cooking', Validators.required, this.asyncCustomValidator]
      ])
    })
    // this.myForm.statusChanges.subscribe((data) => {
    //   console.log(data)
    // });
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  ngOnInit() {
  }

  customValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Custom') {
      return { custom: true };
    }
    return null;
  }

  asyncCustomValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Custom') {
          resolve({ custom: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncCustomValidator));
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
