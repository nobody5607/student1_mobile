import { Component, OnInit } from '@angular/core';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  data: any;
  constructor(
    private lessonService: LessonService,
    public alertController: AlertController
  ) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.lessonService.getData('about').subscribe(result => {
      if (result.success === true) {
        this.data = result.data;
      }else {
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
