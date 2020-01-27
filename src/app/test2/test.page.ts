import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LessonService } from './../services/lesson.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  enableStartTest: boolean = true;
  enableEndTest: boolean = true;

  constructor(
    private router: Router,
    private lessonService: LessonService,
    public alertController: AlertController,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getData();
    this.storage.get('start_score').then(start_score => {
      console.info('StartScore', start_score);
      if(start_score != null && start_score >= 0){
        this.enableStartTest = false;
      }
    });
    this.storage.get('end_score').then(end_score => {
      if(end_score != null && end_score >= 0){
        this.enableEndTest = false;
      }
    });
  }

  getData() {
    console.info('get data test...');
    
  }
  score(){
    this.router.navigate(['/test-score']);
  }
  testStart(type) {
    this.router.navigate(['/test-start',{type:type}]);
  }
}
