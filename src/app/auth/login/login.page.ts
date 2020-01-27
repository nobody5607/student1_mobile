import { Router } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { LessonService } from './../../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false; 
  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
    public authenticationService: AuthenticationService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  } 
  Login(form) {
    const username = form.value.username;
    const password = form.value.password;
    this.present();
    this.authenticationService.login(username, password).subscribe(result => {
      this.dismiss();
      if (result['success'] === false){
        this.presentAlert('Warning', 'กรุณาตรวจสอบ Username หรือ Password');
        return false;
      } else {
        console.warn(result['success']);
        this.router.navigate(['home']);
      }
    }, error => {
      this.presentAlert('Warning', error.toString());
      
    });

  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
