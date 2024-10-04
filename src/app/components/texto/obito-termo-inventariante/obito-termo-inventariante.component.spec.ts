import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObitoTermoInventarianteComponent } from './obito-termo-inventariante.component';

describe('ObitoTermoInventarianteComponent', () => {
  let component: ObitoTermoInventarianteComponent;
  let fixture: ComponentFixture<ObitoTermoInventarianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObitoTermoInventarianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObitoTermoInventarianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
