import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsDeCujusComponent } from './docs-de-cujus.component';

describe('DocsDeCujusComponent', () => {
  let component: DocsDeCujusComponent;
  let fixture: ComponentFixture<DocsDeCujusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsDeCujusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsDeCujusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
