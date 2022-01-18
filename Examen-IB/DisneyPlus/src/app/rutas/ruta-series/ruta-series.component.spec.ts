import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSeriesComponent } from './ruta-series.component';

describe('RutaSeriesComponent', () => {
  let component: RutaSeriesComponent;
  let fixture: ComponentFixture<RutaSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
