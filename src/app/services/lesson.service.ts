import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from './environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private baseUrl = `${environment.BASE_URL}/api`;//'http://backend.project2.local/api';
  private mockToken = 'KSwmb0yFT6Jf14f82pSAnAedCN44uzAQ';

  
  constructor(
    private http: HttpClient,
    private authenticationService:AuthenticationService 
    ) {}
  setHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({ 
         'Content-Type':  'application/json',
        //"Content-Type": "application/x-www-form-urlencoded",
        'x-token': this.mockToken
      })
    };
    return httpOptions;
  }
  getToken(){
    this.authenticationService.getUser().then(res=>{
      if(res !== undefined){
        let user = JSON.parse(res);
        this.mockToken = user['token'];
        console.warn(user);
      }
    
    });
  }
  getStudentByid(){
    this.getToken();
    return this.http.get(`${this.baseUrl}/get-student`, this.setHttpHeaders()).pipe(
      map(results => results),
      catchError(this.handleError)
    );
  }

  getData(params: string): Observable<any> {
    this.getToken();
    return this.http.get(`${this.baseUrl}/get-data?params=${params}`, this.setHttpHeaders()).pipe(
      map(results => results),
      catchError(this.handleError)
    );
  }
  getLessons(search: string): Observable<any> {
    this.getToken();
    return this.http.get(`${this.baseUrl}/get-lesson?term=${search}`, this.setHttpHeaders()).pipe(
      map(results => results),
      catchError(this.handleError)
    );
  }
  getLessonByid(id): Observable<any> {
    this.getToken();
    return this.http.get(`${this.baseUrl}/get-lesson-by-id?id=${id}`, this.setHttpHeaders()).pipe(
      map(results => results),
      catchError(this.handleError)
    );
  }

  getTest(type): Observable<any> {
    this.getToken();
    return this.http.get(`${this.baseUrl}/get-test?type=${type}`, this.setHttpHeaders()).pipe(
      map(results => results),
      catchError(this.handleError)
    );
  }


 saveTest(data, type): Observable<any> {
  this.getToken();

  const httpOptions = {
    headers: new HttpHeaders({
      'x-token': this.mockToken
    })
  };

  const form = new FormData();
  form.append('data', data);
  form.append('type', type);

  console.log(form);

  return this.http.post(`${this.baseUrl}/save-test`, form, httpOptions).pipe(
    map(results => results),
    catchError(this.handleError)
  );
 }





  private handleError(error: HttpErrorResponse) {
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
}
