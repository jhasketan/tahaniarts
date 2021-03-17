import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotVerifiedComponent } from './user-not-verified.component';

describe('UserNotVerifiedComponent', () => {
  let component: UserNotVerifiedComponent;
  let fixture: ComponentFixture<UserNotVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
