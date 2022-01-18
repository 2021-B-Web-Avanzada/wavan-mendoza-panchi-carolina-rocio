import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaWatchlistComponent } from './ruta-watchlist.component';

describe('RutaWatchlistComponent', () => {
  let component: RutaWatchlistComponent;
  let fixture: ComponentFixture<RutaWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
