import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelAccordionComponent } from './marvel-accordion.component';

describe('MarvelAccordionComponent', () => {
  let component: MarvelAccordionComponent;
  let fixture: ComponentFixture<MarvelAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
