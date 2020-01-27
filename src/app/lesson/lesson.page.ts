import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessons: any;
  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.getLessons();
  } 
  getLessons() {
    this.lessonService.getLessons('').subscribe(result => {
      if (result.success === true) {
        this.lessons = result.data;
      } else {
        this.presentAlert('Warning', result.data);
      }
    });
  }
  lessonDetail(data: any) { 
    this.router.navigate(['/lesson-start', {id: data.id}]); 
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
