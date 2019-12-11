import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresListComponent } from './alquileres-list.component';

describe('AlquileresListComponent', () => {
  let component: AlquileresListComponent;
  let fixture: ComponentFixture<AlquileresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
