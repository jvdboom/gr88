import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelMockComponent } from './marvel-mock.component';

describe('MarvelMockComponent', () => {
  let component: MarvelMockComponent;
  let fixture: ComponentFixture<MarvelMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
