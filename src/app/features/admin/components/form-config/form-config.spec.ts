import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormConfig } from './form-config';

describe('FormConfig', () => {
  let component: FormConfig;
  let fixture: ComponentFixture<FormConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(FormConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
