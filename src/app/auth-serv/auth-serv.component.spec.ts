import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthServComponent } from './auth-serv.component';

describe('AuthServComponent', () => {
  let component: AuthServComponent;
  let fixture: ComponentFixture<AuthServComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthServComponent]
    });
    fixture = TestBed.createComponent(AuthServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
