import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropItemsComponent } from './drag-and-drop-items.component';

describe('DragAndDropItemsComponent', () => {
  let component: DragAndDropItemsComponent;
  let fixture: ComponentFixture<DragAndDropItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
