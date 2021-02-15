import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingFormComponent } from './painting-form.component';

describe('PaintingFormComponent', () => {
  let component: PaintingFormComponent;
  let fixture: ComponentFixture<PaintingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
