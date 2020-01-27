import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Receive Parameter
import { ActivatedRoute } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lesson-start',
  templateUrl: './lesson-start.page.html',
  styleUrls: ['./lesson-start.page.scss'],
})
export class LessonStartPage implements OnInit {
  
  lesson: any;
  id:number;

  constructor( 
      private router: ActivatedRoute,
      private lessonService: LessonService,
      public alertController: AlertController
    ) { }

  ngOnInit() {
     this.router.params.subscribe(params=>{
       console.log(params);
       this.getLessonById(params.id)
    });
  }

  getLessonById(id: number) {
    this.lessonService.getLessonByid(id).subscribe(result => {
      if (result.success === true) {
        this.lesson = result.data;
        console.log(this.lesson);
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
