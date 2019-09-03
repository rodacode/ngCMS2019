import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeTagsComponent } from './backoffice-tags.component';

describe('BackofficeTagsComponent', () => {
  let component: BackofficeTagsComponent;
  let fixture: ComponentFixture<BackofficeTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
