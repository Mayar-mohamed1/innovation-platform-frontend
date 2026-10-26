import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginResearcherCompany } from './login-researcher-company';

describe('LoginResearcherCompany', () => {
  let component: LoginResearcherCompany;
  let fixture: ComponentFixture<LoginResearcherCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginResearcherCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginResearcherCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
