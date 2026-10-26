import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMatchesDetails } from './admin-matches-details';

describe('AdminMatchesDetails', () => {
  let component: AdminMatchesDetails;
  let fixture: ComponentFixture<AdminMatchesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMatchesDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMatchesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
