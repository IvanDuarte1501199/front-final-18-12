import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDineroGastadoComponent } from './datos-dinero-gastado.component';

describe('DatosDineroGastadoComponent', () => {
  let component: DatosDineroGastadoComponent;
  let fixture: ComponentFixture<DatosDineroGastadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDineroGastadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDineroGastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
