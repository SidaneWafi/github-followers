import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit{
  followers :any[] =[] ;
  constructor(private service:FollowersService ){}
  ngOnInit(): void {

    this.service.getAll()
    .subscribe((followers:any) => this.followers =followers );

  }
}
