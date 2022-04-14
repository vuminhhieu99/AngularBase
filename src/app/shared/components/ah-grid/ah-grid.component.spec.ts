import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhGridComponent } from './ah-grid.component';

describe('AhGridComponent', () => {
  let component: AhGridComponent;
  let fixture: ComponentFixture<AhGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
