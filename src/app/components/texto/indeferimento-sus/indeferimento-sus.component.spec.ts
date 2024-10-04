import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeferimentoSusComponent } from './indeferimento-sus.component';

describe('IndeferimentoSusComponent', () => {
  let component: IndeferimentoSusComponent;
  let fixture: ComponentFixture<IndeferimentoSusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndeferimentoSusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndeferimentoSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
