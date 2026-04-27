import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventregform } from './eventregform';

describe('Eventregform', () => {
  let component: Eventregform;
  let fixture: ComponentFixture<Eventregform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventregform],
    }).compileComponents();

    fixture = TestBed.createComponent(Eventregform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
