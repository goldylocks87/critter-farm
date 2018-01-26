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
          MatSnackBar,
          MatDialog,
          MatDialogModule} from '@angular/material';

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
    MatSnackBarModule,
    MatDialogModule
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
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    MatSnackBar,
    MatDialog
  ]
})
export class MaterialModule { }
