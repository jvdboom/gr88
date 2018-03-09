import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDataViewComponent } from './marvel-data-view.component';

describe('MarvelDataViewComponent', () => {
  let component: MarvelDataViewComponent;
  let fixture: ComponentFixture<MarvelDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
