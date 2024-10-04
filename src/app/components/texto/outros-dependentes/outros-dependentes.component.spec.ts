import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosDependentesComponent } from './outros-dependentes.component';

describe('OutrosDependentesComponent', () => {
  let component: OutrosDependentesComponent;
  let fixture: ComponentFixture<OutrosDependentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosDependentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
