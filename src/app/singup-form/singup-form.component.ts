import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import {UsernameValidator} from './username-validator' ;
@Component({
  selector: 'singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit{
  ContactMethods =[{id:1,name:'email'},{id:2,name:'telephone'},{id:3,name:'sms'}] ;
constructor(){}

ngOnInit(): void {

}

form = new FormGroup({
  username:new FormControl('',
  [Validators.required,
   Validators.minLength(4),
   UsernameValidator.cannotContainSpace
  ]),
  password:new FormControl('',
  [Validators.required,
    Validators.minLength(4)
   ])
})
get username(){
  return this.form.get('username');
}
get password(){
  return this.form.get('password');
}

}