import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConvertComponent } from './convert/convert.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"convert",component:ConvertComponent}
];
