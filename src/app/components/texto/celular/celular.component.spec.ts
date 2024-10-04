import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularComponent } from './celular.component';

describe('CelularComponent', () => {
  let component: CelularComponent;
  let fixture: ComponentFixture<CelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
