import { Component, OnInit } from '@angular/core';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  data: any;
  constructor(
    private lessonService: LessonService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.lessonService.getData('contact').subscribe(result => {
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
