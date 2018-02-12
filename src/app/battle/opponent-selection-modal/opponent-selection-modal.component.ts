import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CritterService } from '../../services/critter.service';
import { Critter } from '../../models/critter.model';

@Component({
  selector: 'app-opponent-selection-modal',
  templateUrl: './opponent-selection-modal.component.html',
  styleUrls: ['./opponent-selection-modal.component.css']
})
export class OpponentSelectionModalComponent implements OnInit, OnDestroy {

  closeResult: string;
  critters: Critter[];
  userCrittersChanged: Subscription;

  constructor(private modalService: NgbModal,
              private critterService: CritterService) {}

  ngOnInit() {
    this.userCrittersChanged = this.critterService.userCrittersChanged
      .subscribe( (critters: Critter[]) => { this.critters = critters; } );

    this.critters = this.critterService.getUserCritters();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result
      .then(
        (result) => { this.closeResult = `Closed with: ${result}`; },
        (reason) => { this.closeResult = `Dismissed ${this.getDismissReason(reason)}`; }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    this.userCrittersChanged.unsubscribe();
  }
}
