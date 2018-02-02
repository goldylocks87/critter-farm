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
          MatDialogModule,
          MatListModule,
          MatSidenavModule} from '@angular/material';

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
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
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
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [
    MatSnackBar,
    MatDialog
  ]
})
export class MaterialModule { }
