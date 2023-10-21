import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import { catchError } from 'rxjs/operators';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { API_URL } from '../app.module';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(API_URL) private url: string, private http: HttpClient) { }
  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(
       this.handleError
     ));

  }
  create(resource: any): Observable<any> {
    return this.http.post(this.url,resource)
    .pipe(
      catchError(
       this.handleError
     ));
  }
  update(resource:any){
    return  this.http.put(this.url+'/'+resource.id,resource);
  }
  delete(resource:any): Observable<any> {
    return  this.http.delete(this.url+'/'+resource.id)

    .pipe(
      catchError(
       this.handleError
     ));
  }
  private handleError(error :Response){
    if(error.status=== 404){
      return throwError(() => new NotFoundError);
    }
    if (error.status === 400) {
      return throwError(() => new BadInput());
    }
    return throwError(() => new AppError);


  }
}
