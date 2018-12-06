import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PafeNotFoundComponent } from './pafe-not-found.component';

describe('PafeNotFoundComponent', () => {
  let component: PafeNotFoundComponent;
  let fixture: ComponentFixture<PafeNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PafeNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PafeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
