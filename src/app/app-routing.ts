import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MigrantsComponent } from './migrants/migrants.component';
import { OngComponent } from './ong/ong.component';
import { EntrepreneursComponent } from './entrepreneurs/entrepreneurs.component'
import { ProfilComponent } from './profil/profil.component';
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'migrant', component: MigrantsComponent},
    { path : 'ong', component: OngComponent},
    { path : 'entrepreneurs', component: EntrepreneursComponent},
    { path : 'profil', component: ProfilComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
