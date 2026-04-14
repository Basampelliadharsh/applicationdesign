import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePro } from './employee-pro';

describe('EmployeePro', () => {
  let component: EmployeePro;
  let fixture: ComponentFixture<EmployeePro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePro],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeePro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
