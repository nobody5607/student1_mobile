import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LessonService } from './../services/lesson.service';
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.page.html',
  styleUrls: ['./test-score.page.scss'],
})
export class TestScorePage implements OnInit {
  start_score:number = 0;
  end_score:number = 0;
  numberSt:number = 0;
  numberEn:number = 0;
  constructor(private storage: Storage, private lessonService: LessonService) { }
  
  ngOnInit() {
    this.getNumberStartScore(1);
    this.getNumberStartScore(2);
    // this.storage.get('number_score_start').then(res=>{
    //   let score = JSON.parse(res);
    //   console.warn(score.data);
    //   this.numberSt = score.data;
    // });
    // this.storage.get('number_score_end').then(res=>{
    //   let score = JSON.parse(res);
    //   console.warn(score.data);
    //   this.numberEn = score.data;
    // });


    this.storage.get('start_score').then(startScore => {
      console.info('start_score', startScore)
      if(startScore >= 0){
        this.start_score = startScore;
      }
    });
    this.storage.get('end_score').then(end_score => {
      console.warn('end_score', end_score);
      if(end_score >= 0){
        this.end_score = (end_score !== undefined)?end_score:0;
      }
    });
  }

  getNumberStartScore(type){
    this.lessonService.getTest(type).subscribe(result => {
      if (result.success === true) {
        console.log(result.data.length);
        if(type == 1){
          this.numberSt = result.data.length
        }else{
          this.numberEn = result.data.length
        }

      } else {
        console.error(result);
      }
    });
}

}
