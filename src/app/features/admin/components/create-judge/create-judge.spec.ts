import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateJudge } from './create-judge';

describe('CreateJudge', () => {
  let component: CreateJudge;
  let fixture: ComponentFixture<CreateJudge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJudge],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateJudge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
