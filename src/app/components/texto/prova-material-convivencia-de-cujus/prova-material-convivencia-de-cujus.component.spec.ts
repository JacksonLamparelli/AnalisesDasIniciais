import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaMaterialConvivenciaDeCujusComponent } from './prova-material-convivencia-de-cujus.component';

describe('ProvaMaterialConvivenciaDeCujusComponent', () => {
  let component: ProvaMaterialConvivenciaDeCujusComponent;
  let fixture: ComponentFixture<ProvaMaterialConvivenciaDeCujusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaMaterialConvivenciaDeCujusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaMaterialConvivenciaDeCujusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
