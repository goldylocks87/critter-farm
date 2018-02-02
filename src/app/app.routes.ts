import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterListComponent } from './critters/critter-list/critter-list.component';
import { BreedComponent } from './breed/breed.component';
import { CritterDetailComponent } from './critters/critter-detail/critter-detail.component';
import { MyCritterListComponent } from './critters/my-critter-list/my-critter-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes =[
  { path: '', redirectTo: '/critters', pathMatch: 'full' },
  { path: 'critters', component: CritterListComponent },
  { path: 'breed', component: BreedComponent },
  { path: 'mychubs', component: MyCritterListComponent },
  { path: 'detail', component: CritterDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], /* register our routes */
    exports: [RouterModule]
})
export class AppRoutingModule {

}

