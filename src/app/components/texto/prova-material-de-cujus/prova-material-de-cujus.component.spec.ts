import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaMaterialDeCujusComponent } from './prova-material-de-cujus.component';

describe('ProvaMaterialDeCujusComponent', () => {
  let component: ProvaMaterialDeCujusComponent;
  let fixture: ComponentFixture<ProvaMaterialDeCujusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaMaterialDeCujusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaMaterialDeCujusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
