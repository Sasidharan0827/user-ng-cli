import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizePoolComponent } from './prize-pool.component';

describe('PrizePoolComponent', () => {
  let component: PrizePoolComponent;
  let fixture: ComponentFixture<PrizePoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizePoolComponent]
    });
    fixture = TestBed.createComponent(PrizePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
