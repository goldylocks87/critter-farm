import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router/';

import { BreedModalComponent } from '../../shared/modals/breed-modal/breed-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Critter } from '../../models/critter.model';
import { CritterService } from '../../services/critter.service';

@Component({
  selector: 'app-critter-detail',
  templateUrl: './critter-detail.component.html',
  styleUrls: ['./critter-detail.component.css']
})
export class CritterDetailComponent implements OnInit {

  critter: Critter;

  constructor(private route: ActivatedRoute,
              private critterService: CritterService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.critter = this.critterService.getCritter(id);
      }
    );
  }

  openBreedingModal(): void {
    const breedModal = this.dialog.open( BreedModalComponent );
    breedModal.componentInstance.critter = this.critter;
    breedModal.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
