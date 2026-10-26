import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnovationFormConfig } from './innovation-form-config';

describe('InnovationFormConfig', () => {
  let component: InnovationFormConfig;
  let fixture: ComponentFixture<InnovationFormConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationFormConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(InnovationFormConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
