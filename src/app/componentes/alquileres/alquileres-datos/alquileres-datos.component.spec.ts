import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresDatosComponent } from './alquileres-datos.component';

describe('AlquileresDatosComponent', () => {
  let component: AlquileresDatosComponent;
  let fixture: ComponentFixture<AlquileresDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
