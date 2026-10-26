import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyInnovationDetails } from './my-innovation-details';

describe('MyInnovationDetails', () => {
  let component: MyInnovationDetails;
  let fixture: ComponentFixture<MyInnovationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInnovationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MyInnovationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
