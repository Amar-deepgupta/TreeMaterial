import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myform: any = FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      email: ['', [this.emailValidator]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit(form: FormGroup) {
    console.log(form)
    
    
  }
  emailValidator(control:AbstractControl):{[key: string]: boolean} | null {
   
    
    if(control.value === null ||    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(control.value).toLowerCase())) {
      return null;
    }
    return {invalidEmail: true}
  }
  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null{
    if (control.value === null || isNaN(control.value) || control.value.minLength > 6 && control.value.maxLength < 10) {
      console.log(isNaN(control.value));
      return null;
    }
    return{invalidPassword:true}
    
}
}
