
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts:any[] =[] ;

  status=true ;
  post = {
  id:0,
  title:'',
  body:'',
  userId:''

 }
  constructor(private postService:PostService) {

  }
  ngOnInit(){
    this.getPosts();
  }
  getPosts(){
    this.postService.getAll()
        .subscribe((response:any) =>{
          this.posts=response ;
        },error=>{
          alert('erreur inattendue')
          console.log(error)
        })
  }
  createPost(){
     this.postService.create(this.post)
     .subscribe((response:any) =>{
      this.post.id=response.id ;
      //this.posts.push(this.post);
      this.posts.unshift(this.post);
      this.post= {
        id:0,
        title:'',
        body:'',
        userId:''
       }
    },(error:AppError)=>{
      if(error instanceof BadInput){
        alert('merci de verifie votre information ')
      }else{
        alert('erreur inattendue')
        console.log(error)
      }

    })
  }

  editPost(post: any){
    this.post=post ;
    this.status=false ;
  }
  updatePost(){
 this.postService.update(this.post)
  .subscribe((response:any) =>{
    this.post= {
      id:0,
      title:'',
      body:'',
      userId:''
     }
  },error=>{
    alert('erreur inattendue')
    console.log(error)
  })
  this.status=true ;
  }
  deletePost(post: any) {
    this.postService.delete(post)
      .subscribe((response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('NotFoundError:', error);
          alert('Ce post est déjà supprimé');
        } else {
          console.log('Unexpected error:', error);
          alert('Erreur inattendue');
        }
      });
  }

  }

