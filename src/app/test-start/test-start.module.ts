import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestStartPage } from './test-start.page';
import { ComponentsModule } from '../components/component.module.component';

const routes: Routes = [
  {
    path: '',
    component: TestStartPage
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
  declarations: [TestStartPage]
})
export class TestStartPageModule {}
