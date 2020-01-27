import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthGuardService] },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule', canActivate: [AuthGuardService] },
  { path: 'lesson', loadChildren: './lesson/lesson.module#LessonPageModule', canActivate: [AuthGuardService] },
  { path: 'test', loadChildren: './test/test.module#TestPageModule', canActivate: [AuthGuardService] },
  { path: 'test-start', loadChildren: './test-start/test-start.module#TestStartPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'lesson-start', loadChildren: './lesson-start/lesson-start.module#LessonStartPageModule', canActivate: [AuthGuardService] },

  { path: 'test-end', loadChildren: './test-end/test-end.module#TestEndPageModule', canActivate: [AuthGuardService] },
  { path: 'score', loadChildren: './score/score.module#ScorePageModule', canActivate: [AuthGuardService] },
  { path: 'test-score', loadChildren: './test-score/test-score.module#TestScorePageModule', canActivate: [AuthGuardService] },
  { path: 'start', loadChildren: './start/start.module#StartPageModule'},
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule', canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
