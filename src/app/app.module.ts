import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { MigrantsComponent } from './migrants/migrants.component';
import { OngComponent } from './ong/ong.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';

const myFirebaseConfig = {
  apiKey: 'AIzaSyBFazJOlB4p_6abYGo3G663WQ0i8wExKZU',
  authDomain: 'migraos-9713b.firebaseapp.com',
  databaseURL: 'https://migraos-9713b.firebaseio.com',
  storageBucket: 'migraos-9713b.appspot.com',
  messagingSenderId: '299554291057'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MigrantsComponent,
    OngComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
