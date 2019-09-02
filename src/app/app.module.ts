import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// MATERIAL MODULE
import { MaterialModule } from './material-module/material-module.module';

// ANGULAR FLEX LAYOUT
import { FlexLayoutModule } from '@angular/flex-layout';


// ROUTING
import { AppRoutingModule } from './app-routing.module';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// COMPONENTS
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { UserTopBarComponent } from './components/user-top-bar/user-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    HomeComponent,
    ArticleDetailComponent,
    HeaderComponent,
    UserTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
