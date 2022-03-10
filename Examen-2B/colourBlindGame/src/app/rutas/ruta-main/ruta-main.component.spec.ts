import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMainComponent } from './ruta-main.component';

describe('RutaMainComponent', () => {
  let component: RutaMainComponent;
  let fixture: ComponentFixture<RutaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
