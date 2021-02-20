import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingReviewComponent } from './painting-review.component';

describe('PaintingReviewComponent', () => {
  let component: PaintingReviewComponent;
  let fixture: ComponentFixture<PaintingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
