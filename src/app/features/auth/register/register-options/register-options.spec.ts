import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterOptions } from './register-options';

describe('RegisterOptions', () => {
  let component: RegisterOptions;
  let fixture: ComponentFixture<RegisterOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOptions],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
