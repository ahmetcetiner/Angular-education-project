import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000"
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path + "/categories").pipe(
      catchError(this.handleError),
    );
  }
  handleError(err: HttpErrorResponse) {
    let errMessage=""
    if(err.error instanceof ErrorEvent){
      errMessage = "this Error is"+ err.error.message;
    }else{
      errMessage= "System Error"
    }
    return throwError(errMessage);
  }
}
