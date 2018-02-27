import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiteLyComponent } from './kite-ly.component';

describe('KiteLyComponent', () => {
  let component: KiteLyComponent;
  let fixture: ComponentFixture<KiteLyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiteLyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiteLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
