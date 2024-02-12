import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
];
