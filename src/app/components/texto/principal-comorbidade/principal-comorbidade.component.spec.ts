import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComorbidadeComponent } from './principal-comorbidade.component';

describe('PrincipalComorbidadeComponent', () => {
  let component: PrincipalComorbidadeComponent;
  let fixture: ComponentFixture<PrincipalComorbidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalComorbidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalComorbidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
