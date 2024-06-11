import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSelectionComponent } from './bill-selection.component';

describe('BillSelectionComponent', () => {
  let component: BillSelectionComponent;
  let fixture: ComponentFixture<BillSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillSelectionComponent]
    });
    fixture = TestBed.createComponent(BillSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
