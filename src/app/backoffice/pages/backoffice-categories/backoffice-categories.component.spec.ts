import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeCategoriesComponent } from './backoffice-categories.component';

describe('BackofficeCategoriesComponent', () => {
  let component: BackofficeCategoriesComponent;
  let fixture: ComponentFixture<BackofficeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
