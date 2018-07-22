import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDirectiveComponent } from './role-directive.component';

describe('RoleDirectiveComponent', () => {
  let component: RoleDirectiveComponent;
  let fixture: ComponentFixture<RoleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
