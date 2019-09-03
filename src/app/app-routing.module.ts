import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';

import { BackofficeArticlesComponent } from './backoffice/pages/backoffice-articles/backoffice-articles.component';
import { BackofficeMainComponent } from './backoffice/pages/backoffice-main/backoffice-main.component';
import { BackofficeCategoriesComponent } from './backoffice/pages/backoffice-categories/backoffice-categories.component';
import { BackofficeTagsComponent } from './backoffice/pages/backoffice-tags/backoffice-tags.component';
import { BackofficeUsersComponent } from './backoffice/pages/backoffice-users/backoffice-users.component';
import { BackofficeSettingsComponent } from './backoffice/pages/backoffice-settings/backoffice-settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'admin', component: BackofficeMainComponent, children:[
    {path: 'articles', component: BackofficeArticlesComponent, pathMatch: 'full'},
  	{path: 'categories', component: BackofficeCategoriesComponent},
    {path: 'tags', component: BackofficeTagsComponent},
  	{path: 'users', component: BackofficeUsersComponent},
    {path: 'settings', component: BackofficeSettingsComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
