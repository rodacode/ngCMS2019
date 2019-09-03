import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeTopBarComponent } from './backoffice-top-bar.component';

describe('BackofficeTopBarComponent', () => {
  let component: BackofficeTopBarComponent;
  let fixture: ComponentFixture<BackofficeTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
