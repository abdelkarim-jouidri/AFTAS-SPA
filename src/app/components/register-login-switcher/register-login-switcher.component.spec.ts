import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoginSwitcherComponent } from './register-login-switcher.component';

describe('RegisterLoginSwitcherComponent', () => {
  let component: RegisterLoginSwitcherComponent;
  let fixture: ComponentFixture<RegisterLoginSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterLoginSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterLoginSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
