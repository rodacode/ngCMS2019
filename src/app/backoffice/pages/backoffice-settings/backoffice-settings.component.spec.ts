import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeSettingsComponent } from './backoffice-settings.component';

describe('BackofficeSettingsComponent', () => {
  let component: BackofficeSettingsComponent;
  let fixture: ComponentFixture<BackofficeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
