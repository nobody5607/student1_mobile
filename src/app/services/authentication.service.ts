import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = `${environment.BASE_URL}/api`;//'http://project2.bloodcloud.online/api';
  authState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });   
  }
  ifLoggedIn() {
    console.warn('ifLoggedIn');
    this.storage.get('USER_INFO').then((response) => { 
      if (response) {
        console.warn('line 34 status login ', true);
        console.warn('USER_INFO ', response);
        this.authState.next(true);
        this.router.navigate(['home']);
      }
      console.warn('line 37 status login ', false);
    });
  }
  getUser() {
    return this.storage.get('USER_INFO').then(result => result);
  }
 

  login(username, password): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({}) };
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    return this.http.post(`${this.baseUrl}/login`, form, httpOptions).pipe(
      map(results => {
        if (results['success'] === true) {
          console.warn('status login ', results['success']);
          this.authState.next(true);
          this.storage.set('start_score', results['data']['start_score']);
          this.storage.set('end_score', results['data']['end_score']); 
          this.storage.set('USER_INFO', JSON.stringify(results['data'])); 
        }
        console.warn('status auth ', this.authState);
        return results;
      }),
      catchError(err => {
        // console.warn('error', err);
        throw new Error("Server Error");
      })
    );

  }

  logout() {
    this.storage.remove('start_score').then(() => { });
    this.storage.remove('end_score').then(() => { });
    this.storage.remove('number_score').then(() => { });
    this.storage.remove('USER_INFO').then(() => { 

      this.router.navigate(['start']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    console.info('authState', this.authState.value);
    return this.authState.value;
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
