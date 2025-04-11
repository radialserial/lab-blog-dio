import { Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "article/:slug",
    component: ArticleComponent,
    pathMatch: 'prefix',
  },
  {
    path: "**",
    redirectTo: '',
  },
];
