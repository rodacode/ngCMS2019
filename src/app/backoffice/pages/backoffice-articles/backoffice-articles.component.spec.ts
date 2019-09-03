import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeArticlesComponent } from './backoffice-articles.component';

describe('BackofficeArticlesComponent', () => {
  let component: BackofficeArticlesComponent;
  let fixture: ComponentFixture<BackofficeArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
