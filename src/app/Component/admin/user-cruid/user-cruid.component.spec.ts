import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCruidComponent } from './user-cruid.component';

describe('UserCruidComponent', () => {
  let component: UserCruidComponent;
  let fixture: ComponentFixture<UserCruidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCruidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCruidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
