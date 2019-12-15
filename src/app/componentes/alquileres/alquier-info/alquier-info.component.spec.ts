import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquierInfoComponent } from './alquier-info.component';

describe('AlquierInfoComponent', () => {
  let component: AlquierInfoComponent;
  let fixture: ComponentFixture<AlquierInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquierInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
