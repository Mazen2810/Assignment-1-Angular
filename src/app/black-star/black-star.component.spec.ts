import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackStarComponent } from './black-star.component';

describe('BlackStarComponent', () => {
  let component: BlackStarComponent;
  let fixture: ComponentFixture<BlackStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackStarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
