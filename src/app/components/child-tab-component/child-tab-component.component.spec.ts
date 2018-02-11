import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTabComponentComponent } from './child-tab-component.component';

describe('ChildTabComponentComponent', () => {
  let component: ChildTabComponentComponent;
  let fixture: ComponentFixture<ChildTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
