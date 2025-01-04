import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInformationComponent } from './signal-information.component';

describe('SignalInformationComponent', () => {
  let component: SignalInformationComponent;
  let fixture: ComponentFixture<SignalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
