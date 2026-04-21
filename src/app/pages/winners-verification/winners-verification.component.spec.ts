import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersVerificationComponent } from './winners-verification.component';

describe('WinnersVerificationComponent', () => {
  let component: WinnersVerificationComponent;
  let fixture: ComponentFixture<WinnersVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnersVerificationComponent]
    });
    fixture = TestBed.createComponent(WinnersVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
