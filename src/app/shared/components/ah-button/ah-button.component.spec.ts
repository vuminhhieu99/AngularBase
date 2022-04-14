import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhButtonComponent } from './ah-button.component';

describe('AhButtonComponent', () => {
  let component: AhButtonComponent;
  let fixture: ComponentFixture<AhButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
