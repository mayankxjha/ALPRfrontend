import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {UploadComponent} from "./components/upload/upload.component";

const routes: Routes = [{path:'', component:AboutComponent},
  {path:'upload', component:UploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
