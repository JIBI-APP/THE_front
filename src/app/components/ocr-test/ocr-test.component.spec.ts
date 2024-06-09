import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrTestComponent } from './ocr-test.component';

describe('OcrTestComponent', () => {
  let component: OcrTestComponent;
  let fixture: ComponentFixture<OcrTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrTestComponent]
    });
    fixture = TestBed.createComponent(OcrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
