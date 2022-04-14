import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRequestComponent } from './topic-request.component';

describe('TopicRequestComponent', () => {
  let component: TopicRequestComponent;
  let fixture: ComponentFixture<TopicRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
