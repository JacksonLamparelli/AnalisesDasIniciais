import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaoVidaTodaComponent } from './revisao-vida-toda.component';

describe('RevisaoVidaTodaComponent', () => {
  let component: RevisaoVidaTodaComponent;
  let fixture: ComponentFixture<RevisaoVidaTodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisaoVidaTodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisaoVidaTodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
