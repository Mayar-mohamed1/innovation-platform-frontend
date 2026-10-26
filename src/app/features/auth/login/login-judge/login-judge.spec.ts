import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginJudge } from './login-judge';

describe('LoginJudge', () => {
  let component: LoginJudge;
  let fixture: ComponentFixture<LoginJudge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginJudge],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginJudge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
