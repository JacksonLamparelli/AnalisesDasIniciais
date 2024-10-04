import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtestadoCarcerarioComponent } from './atestado-carcerario.component';

describe('AtestadoCarcerarioComponent', () => {
  let component: AtestadoCarcerarioComponent;
  let fixture: ComponentFixture<AtestadoCarcerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtestadoCarcerarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtestadoCarcerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
