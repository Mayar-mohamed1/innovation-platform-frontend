import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnovationSubmit } from './innovation-submit';

describe('InnovationSubmit', () => {
  let component: InnovationSubmit;
  let fixture: ComponentFixture<InnovationSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationSubmit],
    }).compileComponents();

    fixture = TestBed.createComponent(InnovationSubmit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
