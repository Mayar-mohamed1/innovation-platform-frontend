import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Innovations } from './innovations';

describe('Innovations', () => {
  let component: Innovations;
  let fixture: ComponentFixture<Innovations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innovations],
    }).compileComponents();

    fixture = TestBed.createComponent(Innovations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
