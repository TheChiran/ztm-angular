import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClipComponent } from './clip/clip.component';
import { NotFOundComponent } from './not-found/not-found.component';
import { ClipService } from './clip.service';

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
    resolve: {
      clip: ClipService,
    },
  },
  {
    path: '',
    loadChildren: async () =>
      (await import('./video/video.module')).VideoModule,
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
