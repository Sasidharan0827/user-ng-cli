import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDirectoryComponent } from './hero-directory.component';

describe('HeroDirectoryComponent', () => {
  let component: HeroDirectoryComponent;
  let fixture: ComponentFixture<HeroDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDirectoryComponent]
    });
    fixture = TestBed.createComponent(HeroDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
