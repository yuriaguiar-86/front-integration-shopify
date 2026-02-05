import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLayoutComponent } from './private-layout-component';

describe('PrivateLayoutComponent', () => {
  let component: PrivateLayoutComponent;
  let fixture: ComponentFixture<PrivateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
