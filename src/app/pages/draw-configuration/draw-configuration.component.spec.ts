import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawConfigurationComponent } from './draw-configuration.component';

describe('DrawConfigurationComponent', () => {
  let component: DrawConfigurationComponent;
  let fixture: ComponentFixture<DrawConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawConfigurationComponent]
    });
    fixture = TestBed.createComponent(DrawConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
