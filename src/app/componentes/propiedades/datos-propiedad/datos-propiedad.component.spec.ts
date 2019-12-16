import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPropiedadComponent } from './datos-propiedad.component';

describe('DatosPropiedadComponent', () => {
  let component: DatosPropiedadComponent;
  let fixture: ComponentFixture<DatosPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
