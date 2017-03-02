import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MigrantsComponent } from './migrants/migrants.component';
import { OngComponent } from './ong/ong.component';
import 'hammerjs';

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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
