import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalDuenioComponent } from './pantalla-principal-duenio.component';

describe('PantallaPrincipalDuenioComponent', () => {
  let component: PantallaPrincipalDuenioComponent;
  let fixture: ComponentFixture<PantallaPrincipalDuenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaPrincipalDuenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPrincipalDuenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
