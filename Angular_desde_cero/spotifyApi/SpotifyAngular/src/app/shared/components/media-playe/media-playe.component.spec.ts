import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayeComponent } from './media-playe.component';

describe('MediaPlayeComponent', () => {
  let component: MediaPlayeComponent;
  let fixture: ComponentFixture<MediaPlayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaPlayeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPlayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
