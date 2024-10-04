import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizarInicialComponent } from './organizar-inicial.component';

describe('OrganizarInicialComponent', () => {
  let component: OrganizarInicialComponent;
  let fixture: ComponentFixture<OrganizarInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizarInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizarInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
