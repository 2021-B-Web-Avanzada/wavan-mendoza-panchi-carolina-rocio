import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaOriginalsComponent } from './ruta-originals.component';

describe('RutaOriginalsComponent', () => {
  let component: RutaOriginalsComponent;
  let fixture: ComponentFixture<RutaOriginalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaOriginalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
