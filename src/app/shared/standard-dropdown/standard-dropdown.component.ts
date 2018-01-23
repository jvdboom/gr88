import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { SelectItem } from "primeng/primeng";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { JsonPlaceholderService } from "../../services/json-placeholder.service";

@Component({
  selector: "app-standard-dropdown",
  template: `
  <p-dropdown
    [style]="{'width':'250px','text-align':'center'}"
    [options]="selectItems"
    [(ngModel)]="this.id"
    [autoWidth]="false"
    (onChange)="handleOnChange($event)">
  </p-dropdown>
  `
})
export class StandardDropdownComponent implements OnInit {
  // @Input() tableName: string = "";
  // @Input() tableCell: string = "";
  @Input() id: number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();

  selectItems: SelectItem[];
  private dropDownItems$: Observable<any[]>;
  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit() {
    this.dropDownItems$ = this.jsonPlaceholderService.getRows("user");
    this.dropDownItems$.subscribe(rows => {
      this.selectItems = [];
      this.selectItems.push({ label: `Users`, value: 0 });
      rows.forEach(row => {
        this.selectItems.push({ label: `${row[`name`]}`, value: row.id });
      });
    });
  }

  handleOnChange() {
    this.onChange.emit(this.id);
  }

}
