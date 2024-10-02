import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaureteListComponent } from './laurete-list.component';

describe('LaureteListComponent', () => {
  let component: LaureteListComponent;
  let fixture: ComponentFixture<LaureteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaureteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaureteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
