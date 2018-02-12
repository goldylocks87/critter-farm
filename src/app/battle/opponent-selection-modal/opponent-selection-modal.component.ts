import { Component, OnInit, OnDestroy, Output } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { CritterService } from '../../services/critter.service';
import { Critter } from '../../models/critter.model';

@Component({
  selector: 'app-opponent-selection-modal',
  templateUrl: './opponent-selection-modal.component.html',
  styleUrls: ['./opponent-selection-modal.component.css']
})
export class OpponentSelectionModalComponent implements OnInit, OnDestroy {

  critters: Critter[]; // available critters for selection
  userCrittersChanged: Subscription;

  @Output() critterSelected = new Subject<Critter>();

  modalRef: NgbModalRef;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private critterService: CritterService) {}

  ngOnInit() {
    this.userCrittersChanged = this.critterService.userCrittersChanged
      .subscribe( (critters: Critter[]) => { this.critters = critters; } );

    this.critters = this.critterService.getUserCritters();
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });

    this.modalRef.result
      .then(
        (result) => { this.closeResult = `Closed with: ${result}`; },
        (reason) => { this.closeResult = `Dismissed ${this.getDismissReason(reason)}`; }
      );
  }

  onSelect(critter: Critter) {
    this.critterSelected.next( critter );
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.userCrittersChanged.unsubscribe();
  }
}
