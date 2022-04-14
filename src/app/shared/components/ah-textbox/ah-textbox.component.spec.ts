import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhTextboxComponent } from './ah-textbox.component';

describe('AhTextboxComponent', () => {
  let component: AhTextboxComponent;
  let fixture: ComponentFixture<AhTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
