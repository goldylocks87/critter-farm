import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes =[
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'home', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], /* register our routes */
    exports: [RouterModule]
})
export class AppRoutingModule {

}

