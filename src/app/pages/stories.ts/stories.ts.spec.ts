import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesTs } from './stories.ts';

describe('StoriesTs', () => {
  let component: StoriesTs;
  let fixture: ComponentFixture<StoriesTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesTs],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
