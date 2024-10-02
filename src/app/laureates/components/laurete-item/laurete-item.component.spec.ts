import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaureteItemComponent } from './laurete-item.component';

describe('LaureteItemComponent', () => {
  let component: LaureteItemComponent;
  let fixture: ComponentFixture<LaureteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaureteItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaureteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
