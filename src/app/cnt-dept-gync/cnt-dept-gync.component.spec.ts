import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CntDeptGyncComponent } from './cnt-dept-gync.component';

describe('CntDeptGyncComponent', () => {
  let component: CntDeptGyncComponent;
  let fixture: ComponentFixture<CntDeptGyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CntDeptGyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CntDeptGyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
