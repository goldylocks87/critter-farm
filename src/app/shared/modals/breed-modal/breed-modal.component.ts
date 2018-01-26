import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router/';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CritterDetailComponent } from '../../../critters/critter-detail/critter-detail.component';
import { CritterService } from '../../../services/critter.service';
import { Critter } from '../../../models/critter.model';
import { StorkService } from '../../../services/stork.service';

@Component({
  selector: 'app-breed-modal',
  templateUrl: './breed-modal.component.html',
  styleUrls: ['./breed-modal.component.css']
})
export class BreedModalComponent {

  critters: Critter[];
  critter: Critter;

  constructor(public dialogRef: MatDialogRef<CritterDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private critterService: CritterService,
              private stork: StorkService,
              private router: Router ) {

    this.critters = this.critterService.getSampleCritters();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectToBreed( index: number ) {
    this.stork.makeBabe( this.critters[index], this.critter );
    this.dialogRef.close();
    this.router.navigate(['/breed']);
  }

}
