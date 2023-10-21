import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private route:Router){ }
   ajoute(){
     this.route.navigate(['followers','12' ,'idbrahimdev'],{
      queryParams:{page:'12' ,type:'Admin'}
     })
  }
}
