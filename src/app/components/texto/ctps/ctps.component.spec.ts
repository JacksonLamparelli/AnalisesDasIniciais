import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtpsComponent } from './ctps.component';

describe('CtpsComponent', () => {
  let component: CtpsComponent;
  let fixture: ComponentFixture<CtpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
