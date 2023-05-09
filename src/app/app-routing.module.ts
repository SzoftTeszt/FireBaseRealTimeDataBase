import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { HelperComponent } from './helper/helper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"list",component:DataListComponent},
  {path:"help",component:HelperComponent},
  {path:" ",component:HomeComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
