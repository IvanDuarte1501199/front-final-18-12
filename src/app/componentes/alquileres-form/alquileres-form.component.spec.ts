import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresFormComponent } from './alquileres-form.component';

describe('AlquileresFormComponent', () => {
  let component: AlquileresFormComponent;
  let fixture: ComponentFixture<AlquileresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
