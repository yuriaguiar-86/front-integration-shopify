import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesHeader } from './titles-header';

describe('TitlesHeader', () => {
  let component: TitlesHeader;
  let fixture: ComponentFixture<TitlesHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlesHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
