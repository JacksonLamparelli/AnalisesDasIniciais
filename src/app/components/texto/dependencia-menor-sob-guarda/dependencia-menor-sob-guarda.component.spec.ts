import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciaMenorSobGuardaComponent } from './dependencia-menor-sob-guarda.component';

describe('DependenciaMenorSobGuardaComponent', () => {
  let component: DependenciaMenorSobGuardaComponent;
  let fixture: ComponentFixture<DependenciaMenorSobGuardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciaMenorSobGuardaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciaMenorSobGuardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
