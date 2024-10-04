import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCronologicaComponent } from './ordem-cronologica.component';

describe('OrdemCronologicaComponent', () => {
  let component: OrdemCronologicaComponent;
  let fixture: ComponentFixture<OrdemCronologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdemCronologicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemCronologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
