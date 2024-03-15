import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDensityComponent } from './login-density.component';

describe('LoginDensityComponent', () => {
  let component: LoginDensityComponent;
  let fixture: ComponentFixture<LoginDensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDensityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
