import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMedicamentosPage } from './detalle-medicamentos.page';

describe('DetalleMedicamentosPage', () => {
  let component: DetalleMedicamentosPage;
  let fixture: ComponentFixture<DetalleMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
