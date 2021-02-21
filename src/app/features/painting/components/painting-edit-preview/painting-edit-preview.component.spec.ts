import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingEditPreviewComponent } from './painting-edit-preview.component';

describe('PaintingEditPreviewComponent', () => {
  let component: PaintingEditPreviewComponent;
  let fixture: ComponentFixture<PaintingEditPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingEditPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingEditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
