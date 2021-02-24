import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCartComponent } from './like-cart.component';

describe('LikeCartComponent', () => {
  let component: LikeCartComponent;
  let fixture: ComponentFixture<LikeCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
