import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityImpactComponent } from './charity-impact.component';

describe('CharityImpactComponent', () => {
  let component: CharityImpactComponent;
  let fixture: ComponentFixture<CharityImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharityImpactComponent]
    });
    fixture = TestBed.createComponent(CharityImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
