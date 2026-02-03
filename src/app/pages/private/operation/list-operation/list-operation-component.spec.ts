import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperationComponent } from './list-operation-component';

describe('ListOperationComponent', () => {
  let component: ListOperationComponent;
  let fixture: ComponentFixture<ListOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOperationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
