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
          MatGridListModule,
          MatSnackBarModule,
          MatSnackBar} from '@angular/material';

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
    MatGridListModule,
    MatSnackBarModule
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
  ],
  providers: [
    MatSnackBar
  ]
})
export class MaterialModule { }
