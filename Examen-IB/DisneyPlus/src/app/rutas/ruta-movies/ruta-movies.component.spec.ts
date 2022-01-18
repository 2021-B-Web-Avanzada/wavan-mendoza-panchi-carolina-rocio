import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMoviesComponent } from './ruta-movies.component';

describe('RutaMoviesComponent', () => {
  let component: RutaMoviesComponent;
  let fixture: ComponentFixture<RutaMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
