import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.Logout();
  }
  ionViewDidEnter() {
    console.warn('Logout');
    this.Logout();
  }
  Logout(){
    this.authenticationService.logout();
  } 
}
