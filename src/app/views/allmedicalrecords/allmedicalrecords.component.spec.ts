import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmedicalrecordsComponent } from './allmedicalrecords.component';

describe('AllmedicalrecordsComponent', () => {
  let component: AllmedicalrecordsComponent;
  let fixture: ComponentFixture<AllmedicalrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmedicalrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmedicalrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
