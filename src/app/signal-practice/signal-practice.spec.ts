import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalPractice } from './signal-practice';

describe('SignalPractice', () => {
  let component: SignalPractice;
  let fixture: ComponentFixture<SignalPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
