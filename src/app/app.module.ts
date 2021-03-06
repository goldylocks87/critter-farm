import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// for svgs
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { DataStorageService } from './services/data-storage.service';
import { DnaService } from './services/dna.service';
import { AppRoutingModule } from './app.routes';
import { StorkService } from './services/stork.service';
import { HeaderComponent } from './header/header.component';
import { CritterComponent } from './critters/critter/critter.component';
import { CritterListComponent } from './critters/critter-list/critter-list.component';
import { SelectDirective } from './directives/select.directive';
import { BreedComponent } from './breed/breed.component';
import { CritterDetailComponent } from './critters/critter-detail/critter-detail.component';
import { CritterService } from './services/critter.service';
import { MyCritterListComponent } from './critters/my-critter-list/my-critter-list.component';
import { DropdownDirective } from './directives/dropdown.directive';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BattleComponent } from './battle/battle.component';
import { BattleCardComponent } from './battle/battle-card/battle-card.component';
import { OpponentSelectionModalComponent } from './battle/opponent-selection-modal/opponent-selection-modal.component';
import { CritterCardComponent } from './critters/critter-card/critter-card.component';
import { ProfileComponent } from './users/profile/profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CritterComponent,
    CritterListComponent,
    SelectDirective,
    BreedComponent,
    CritterDetailComponent,
    MyCritterListComponent,
    PageNotFoundComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent,
    BattleComponent,
    BattleCardComponent,
    OpponentSelectionModalComponent,
    CritterCardComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    DataStorageService,
    DnaService,
    StorkService,
    CritterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
