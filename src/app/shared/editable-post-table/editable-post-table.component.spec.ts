import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablePostTableComponent } from './editable-post-table.component';

describe('EditablePostTableComponent', () => {
  let component: EditablePostTableComponent;
  let fixture: ComponentFixture<EditablePostTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablePostTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablePostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
