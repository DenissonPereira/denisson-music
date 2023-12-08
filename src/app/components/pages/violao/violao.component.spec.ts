import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolaoComponent } from './violao.component';

describe('ViolaoComponent', () => {
  let component: ViolaoComponent;
  let fixture: ComponentFixture<ViolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViolaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
