import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTurboComponent } from './table-turbo.component';

describe('TableTurboComponent', () => {
  let component: TableTurboComponent;
  let fixture: ComponentFixture<TableTurboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTurboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTurboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
