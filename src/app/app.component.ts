import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = {
    username : '',
    email : '',
    address : '',
    dob : '',
    password : '',
    phone : ''

  }

  alphabetregex = /^[a-zA-Z]+$/
  regex= /^[a-zA-Z]+$/ 
  integerRegex =/^\d+$/
  passwordreg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  passreg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  Dateregex=/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/

  


  registerFn(){
    console.log(this.form)
  }
}
