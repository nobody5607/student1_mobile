import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  data = [];
  constructor(
      private router: Router,
      private activeRouter: ActivatedRoute,
      private lessonService: LessonService,
      public alertController: AlertController,
      private storage: Storage,
  ) { }

  ngOnInit() {
    console.info('get score...');
    this.storage.get('score').then(result => {
      if (result != null) {
        this.data = JSON.parse(result);
        //this.data['count'] = this.data['data'].length;
        console.log(this.data);
      }
    });
    this.storage.get('number_score').then(result => {
      if (result != null) { 
        this.data['count'] = result; 
        console.warn('number score', this.data['count']);
      }
    });
    //
  }
  goHome(){
    this.router.navigate(['home']);
  }

}
