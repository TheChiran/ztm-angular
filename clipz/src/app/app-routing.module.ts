import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClipComponent } from './clip/clip.component';
import { NotFOundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'clip/:id',
    component: ClipComponent,
  },
  {
    path: '**',
    component: NotFOundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
