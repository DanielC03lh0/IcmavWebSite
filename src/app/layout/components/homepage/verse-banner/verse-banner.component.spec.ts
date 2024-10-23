import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseBannerComponent } from './verse-banner.component';

describe('VerseBannerComponent', () => {
  let component: VerseBannerComponent;
  let fixture: ComponentFixture<VerseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerseBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
