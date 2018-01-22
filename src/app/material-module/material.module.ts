import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatCardModule,
          MatTabsModule,
          MatCheckboxModule,
          MatSlideToggleModule,
          MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
