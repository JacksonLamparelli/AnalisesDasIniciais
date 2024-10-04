import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsReclusoComponent } from './docs-recluso.component';

describe('DocsReclusoComponent', () => {
  let component: DocsReclusoComponent;
  let fixture: ComponentFixture<DocsReclusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsReclusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsReclusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
