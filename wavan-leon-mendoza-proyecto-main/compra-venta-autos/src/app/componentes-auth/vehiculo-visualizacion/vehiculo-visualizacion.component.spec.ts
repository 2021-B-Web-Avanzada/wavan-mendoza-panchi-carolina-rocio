import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoVisualizacionComponent } from './vehiculo-visualizacion.component';

describe('VehiculoVisualizacionComponent', () => {
  let component: VehiculoVisualizacionComponent;
  let fixture: ComponentFixture<VehiculoVisualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoVisualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoVisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
