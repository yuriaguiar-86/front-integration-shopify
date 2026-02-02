import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperation } from './form-operation';

describe('FormOperation', () => {
  let component: FormOperation;
  let fixture: ComponentFixture<FormOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOperation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
