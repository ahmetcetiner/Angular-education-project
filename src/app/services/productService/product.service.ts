import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000"
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.path + "/products").pipe(
      catchError(this.handleError),
    );
  }

  getProductByCategory(categoryId:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.path + "/products?catagoryID="+categoryId)
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
