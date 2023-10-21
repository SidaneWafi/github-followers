import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  ContactMethods =[{id:1,name:'email'},{id:2,name:'telephone'},{id:3,name:'sms'}] ;
constructor(){}

ngOnInit(): void {

}
  log(x:any){
  console.log(x)
  }
  submit(f:any){
    console.log(f.value.contact)
  }

}
