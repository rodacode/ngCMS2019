import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeMainComponent } from './backoffice-main.component';

describe('BackofficeMainComponent', () => {
  let component: BackofficeMainComponent;
  let fixture: ComponentFixture<BackofficeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
