import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkfeedComponent } from './linkfeed.component';

describe('LinkfeedComponent', () => {
  let component: LinkfeedComponent;
  let fixture: ComponentFixture<LinkfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
