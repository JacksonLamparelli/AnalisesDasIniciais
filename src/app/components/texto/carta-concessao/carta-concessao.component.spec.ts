import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaConcessaoComponent } from './carta-concessao.component';

describe('CartaConcessaoComponent', () => {
  let component: CartaConcessaoComponent;
  let fixture: ComponentFixture<CartaConcessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaConcessaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaConcessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
