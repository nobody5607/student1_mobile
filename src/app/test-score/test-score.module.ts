import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestScorePage } from './test-score.page';
import { ComponentsModule } from '../components/component.module.component';

const routes: Routes = [
  {
    path: '',
    component: TestScorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestScorePage]
})
export class TestScorePageModule {}
