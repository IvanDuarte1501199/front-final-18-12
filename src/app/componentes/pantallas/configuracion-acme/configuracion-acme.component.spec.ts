import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAcmeComponent } from './configuracion-acme.component';

describe('ConfiguracionAcmeComponent', () => {
  let component: ConfiguracionAcmeComponent;
  let fixture: ComponentFixture<ConfiguracionAcmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionAcmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
