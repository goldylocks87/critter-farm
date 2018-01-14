import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterListComponent } from './critter-list.component';

describe('CritterListComponent', () => {
  let component: CritterListComponent;
  let fixture: ComponentFixture<CritterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
