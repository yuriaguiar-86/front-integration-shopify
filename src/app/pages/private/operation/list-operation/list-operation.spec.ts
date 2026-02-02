import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperation } from './list-operation';

describe('ListOperation', () => {
  let component: ListOperation;
  let fixture: ComponentFixture<ListOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOperation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
