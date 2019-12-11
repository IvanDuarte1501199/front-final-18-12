import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesFormComponent } from './propiedades-form.component';

describe('PropiedadesFormComponent', () => {
  let component: PropiedadesFormComponent;
  let fixture: ComponentFixture<PropiedadesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
