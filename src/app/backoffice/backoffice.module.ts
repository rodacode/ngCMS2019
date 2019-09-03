import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTING
import { AppRoutingModule } from '../app-routing.module';

// MATERIAL MODULE
import { MaterialModule } from '../material-module/material-module.module';

//COMPONENTS
import { BackofficeArticlesComponent } from './pages/backoffice-articles/backoffice-articles.component';
import { BackofficeMainComponent } from './pages/backoffice-main/backoffice-main.component';
import { BackofficeTopBarComponent } from './components/backoffice-top-bar/backoffice-top-bar.component';
import { BackofficeCategoriesComponent } from './pages/backoffice-categories/backoffice-categories.component';
import { BackofficeTagsComponent } from './pages/backoffice-tags/backoffice-tags.component';
import { BackofficeUsersComponent } from './pages/backoffice-users/backoffice-users.component';
import { BackofficeSettingsComponent } from './pages/backoffice-settings/backoffice-settings.component';


@NgModule({
  declarations: [BackofficeArticlesComponent, BackofficeMainComponent, BackofficeTopBarComponent, BackofficeCategoriesComponent, BackofficeTagsComponent, BackofficeUsersComponent, BackofficeSettingsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
