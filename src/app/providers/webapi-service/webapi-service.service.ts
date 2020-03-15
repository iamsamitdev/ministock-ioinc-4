import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class WebapiServiceService {

// API path
base_path = 'http://localhost/stockapi/public/api/';

constructor(private http: HttpClient) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

//  ฟังก์ชันในการอ่านข้อมูล Product
// Method GET
geProductList(): Observable<Product> {
  return this.http
    .get<Product>(this.base_path + 'products')
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// ฟังก์ชันสำหรับการบันทึกข้อมูล
// Method POST
createProduct(item): Observable<Product> {
  return this.http
    .post<Product>(this.base_path + 'products', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
  );
}

// Check Login
checkLogin(userdata): Observable<User> {
  return this.http
  .post<User>(this.base_path + 'user/login', JSON.stringify(userdata), this.httpOptions)
  .pipe(
  retry(2),
  catchError(this.handleError)
);
}

}
