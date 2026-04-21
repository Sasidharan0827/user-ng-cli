import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanguardDrawLiveComponent } from './vanguard-draw-live.component';

describe('VanguardDrawLiveComponent', () => {
  let component: VanguardDrawLiveComponent;
  let fixture: ComponentFixture<VanguardDrawLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VanguardDrawLiveComponent]
    });
    fixture = TestBed.createComponent(VanguardDrawLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
