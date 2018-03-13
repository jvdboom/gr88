import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMockComponent } from './primeng-mock.component';

describe('PrimengMockComponent', () => {
  let component: PrimengMockComponent;
  let fixture: ComponentFixture<PrimengMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
