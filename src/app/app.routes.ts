import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterListComponent } from './critter-list/critter-list.component';
import { BreedComponent } from './breed/breed.component';

const appRoutes: Routes =[
  { path: '', component: CritterListComponent, pathMatch: 'full' },
  { path: 'critters', component: CritterListComponent }
  { path: 'breed', component: BreedComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], /* register our routes */
    exports: [RouterModule]
})
export class AppRoutingModule {

}

