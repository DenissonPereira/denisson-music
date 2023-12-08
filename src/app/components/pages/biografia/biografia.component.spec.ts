import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiaComponent } from './biografia.component';

describe('BiografiaComponent', () => {
  let component: BiografiaComponent;
  let fixture: ComponentFixture<BiografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
