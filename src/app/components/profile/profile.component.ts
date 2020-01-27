import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private storage:Storage,
    private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
     console.info('get profile...');
     this.storage.get('USER_INFO').then(profile => {
       if(profile != null){
          this.profile = JSON.parse(profile);
       }
       console.info(this.profile);
     })
  }
  Logout(){
    this.authenticationService.logout();
  } 

}
