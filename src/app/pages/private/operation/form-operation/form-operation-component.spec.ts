import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperationComponent } from './form-operation-component';

describe('FormOperationComponent', () => {
  let component: FormOperationComponent;
  let fixture: ComponentFixture<FormOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOperationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
