import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CntDeptOncComponent } from './cnt-dept-onc.component';

describe('CntDeptOncComponent', () => {
  let component: CntDeptOncComponent;
  let fixture: ComponentFixture<CntDeptOncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CntDeptOncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CntDeptOncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
