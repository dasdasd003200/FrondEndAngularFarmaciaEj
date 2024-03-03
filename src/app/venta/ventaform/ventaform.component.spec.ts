import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaformComponent } from './ventaform.component';

describe('VentaformComponent', () => {
  let component: VentaformComponent;
  let fixture: ComponentFixture<VentaformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaformComponent]
    });
    fixture = TestBed.createComponent(VentaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
