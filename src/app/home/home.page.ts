import { Component } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataHome: any;
  constructor(
    private lessonService: LessonService,
    public alertController: AlertController
  ) { }
  ionViewWillEnter() {
     console.warn('ionViewWillEnter');
  }


  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.lessonService.getData('home').subscribe(result => {
      if (result.success === true) {
        this.dataHome = result.data;
      } else {
        this.presentAlert('Warning', result.data);
      }
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

}
