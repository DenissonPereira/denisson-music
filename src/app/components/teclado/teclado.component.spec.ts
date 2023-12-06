import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecladoComponent } from './teclado.component';

describe('TecladoComponent', () => {
  let component: TecladoComponent;
  let fixture: ComponentFixture<TecladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
