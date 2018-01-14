import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// for svgs
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { DnaService } from './services/dna.service';
import { AppRoutingModule } from './app.routes';
import { StorkService } from './services/stork.service';
import { HeaderComponent } from './header/header.component';
import { CritterComponent } from './critter/critter.component';
import { CritterListComponent } from './critter-list/critter-list.component';
import { SelectDirective } from './directives/select.directive';
import { BreedComponent } from './breed/breed.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CritterComponent,
    CritterListComponent,
    SelectDirective,
    BreedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [DnaService, StorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
