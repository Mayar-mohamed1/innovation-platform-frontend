import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Judge } from './judge';

describe('Judge', () => {
  let component: Judge;
  let fixture: ComponentFixture<Judge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Judge],
    }).compileComponents();

    fixture = TestBed.createComponent(Judge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
