import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {UploadComponent} from "./components/upload/upload.component";
import {TheBackgroundComponent} from "./components/the-background/the-background.component";
import {CursorComponent} from "./components/cursor/cursor.component";
import {MapsComponent} from "./components/maps/maps.component";

const routes: Routes = [{
  path: '', component: AboutComponent, children: [
    {path: '', component: TheBackgroundComponent}]
},
  {
    path: 'upload', component: UploadComponent, children: [
      {path: '', component: CursorComponent}
    ]
  },
  {path: 'maps', component: MapsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
