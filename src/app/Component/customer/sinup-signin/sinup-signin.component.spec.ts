import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinupSigninComponent } from './sinup-signin.component';

describe('SinupSigninComponent', () => {
  let component: SinupSigninComponent;
  let fixture: ComponentFixture<SinupSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinupSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinupSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
