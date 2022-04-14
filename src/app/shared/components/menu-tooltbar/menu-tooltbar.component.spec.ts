import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTooltbarComponent } from './menu-tooltbar.component';

describe('MenuTooltbarComponent', () => {
  let component: MenuTooltbarComponent;
  let fixture: ComponentFixture<MenuTooltbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTooltbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTooltbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
