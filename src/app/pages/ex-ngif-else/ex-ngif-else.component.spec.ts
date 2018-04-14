import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgifElseComponent } from './ex-ngif-else.component';

describe('ExNgifElseComponent', () => {
  let component: ExNgifElseComponent;
  let fixture: ComponentFixture<ExNgifElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExNgifElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgifElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
