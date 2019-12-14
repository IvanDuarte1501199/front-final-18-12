import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPropiedadComponent } from './info-propiedad.component';

describe('InfoPropiedadComponent', () => {
  let component: InfoPropiedadComponent;
  let fixture: ComponentFixture<InfoPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
