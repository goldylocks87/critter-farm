import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterComponent } from './critter.component';

describe('CritterComponent', () => {
  let component: CritterComponent;
  let fixture: ComponentFixture<CritterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
