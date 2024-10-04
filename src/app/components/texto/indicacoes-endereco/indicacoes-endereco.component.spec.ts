import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacoesEnderecoComponent } from './indicacoes-endereco.component';

describe('IndicacoesEnderecoComponent', () => {
  let component: IndicacoesEnderecoComponent;
  let fixture: ComponentFixture<IndicacoesEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicacoesEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicacoesEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
