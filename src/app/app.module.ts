import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// for the layout
import { FlexLayoutModule } from '@angular/flex-layout/';

// for svgs
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';
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

import { BreedModalComponent } from './shared/modals/breed-modal/breed-modal.component';


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
    BreedModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AngularSvgIconModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataStorageService,
    DnaService,
    StorkService,
    CritterService
  ],
  entryComponents: [
    BreedModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
