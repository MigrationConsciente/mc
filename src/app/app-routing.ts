import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MigrantsComponent } from './migrants/migrants.component';
import { OngComponent } from './ong/ong.component'

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'migrant', component: MigrantsComponent},
    { path : 'ong', component: OngComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
