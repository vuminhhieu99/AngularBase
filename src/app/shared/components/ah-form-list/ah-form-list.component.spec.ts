import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhFormListComponent } from './ah-form-list.component';

describe('AhFormListComponent', () => {
  let component: AhFormListComponent;
  let fixture: ComponentFixture<AhFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
