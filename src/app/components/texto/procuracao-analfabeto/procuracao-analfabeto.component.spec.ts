import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuracaoAnalfabetoComponent } from './procuracao-analfabeto.component';

describe('ProcuracaoAnalfabetoComponent', () => {
  let component: ProcuracaoAnalfabetoComponent;
  let fixture: ComponentFixture<ProcuracaoAnalfabetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcuracaoAnalfabetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcuracaoAnalfabetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
