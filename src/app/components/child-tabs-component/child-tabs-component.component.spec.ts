import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTabsComponentComponent } from './child-tabs-component.component';

describe('ChildTabsComponentComponent', () => {
  let component: ChildTabsComponentComponent;
  let fixture: ComponentFixture<ChildTabsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTabsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
