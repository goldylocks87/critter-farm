import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterListComponent } from './critters/critter-list/critter-list.component';
import { BreedComponent } from './breed/breed.component';
import { CritterDetailComponent } from './critters/critter-detail/critter-detail.component';
import { MyCritterListComponent } from './critters/my-critter-list/my-critter-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BattleComponent } from './battle/battle.component';
import { ProfileComponent } from './users/profile/profile.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  { path: '', redirectTo: '/critters', pathMatch: 'full' },
  { path: 'critters', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'breed', component: BreedComponent },
  { path: 'mychubs', component: MyCritterListComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'detail', component: CritterDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], /* register our routes */
    exports: [RouterModule]
})
export class AppRoutingModule {

}

