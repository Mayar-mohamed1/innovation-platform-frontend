import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChallengeFormConfig } from './challenge-form-config';

describe('ChallengeFormConfig', () => {
  let component: ChallengeFormConfig;
  let fixture: ComponentFixture<ChallengeFormConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeFormConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeFormConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
