import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaEconomicaDeCujusComponent } from './dependencia-economica-de-cujus.component';

describe('DependenciaEconomicaDeCujusComponent', () => {
  let component: DependenciaEconomicaDeCujusComponent;
  let fixture: ComponentFixture<DependenciaEconomicaDeCujusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciaEconomicaDeCujusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciaEconomicaDeCujusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
