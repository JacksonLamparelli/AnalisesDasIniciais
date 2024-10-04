import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProvaMaterialComponent } from './inicio-prova-material.component';

describe('InicioProvaMaterialComponent', () => {
  let component: InicioProvaMaterialComponent;
  let fixture: ComponentFixture<InicioProvaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioProvaMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioProvaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
