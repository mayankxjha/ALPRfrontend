import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {UploadComponent} from "./components/upload/upload.component";
import {TheBackgroundComponent} from "./components/the-background/the-background.component";

const routes: Routes = [{path:'', component:AboutComponent, children: [{
  path:'about', component: TheBackgroundComponent}]},
  {path:'upload', component:UploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
