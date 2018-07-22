import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosthotComponent } from './hosthot.component';

describe('HosthotComponent', () => {
  let component: HosthotComponent;
  let fixture: ComponentFixture<HosthotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosthotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosthotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
