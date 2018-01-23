import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Comment } from "@angular/compiler";
import { CarService } from "../../shared/car.service";
import { Car } from "../../models/car";
import { JsonPlaceholderService } from "../../services/json-placeholder.service";

@Component({
  selector: "app-editable-table",
  templateUrl: "./editable-table.component.html",
  styleUrls: ["./editable-table.component.css"]
})
export class EditableTableComponent implements OnInit {
  cars: Car[];
  selectedEditableCar: Car = undefined;
  selectedCar: Car = undefined;
  checked: boolean = false;

  public comments$: Observable<Comment[]>;
  public comment: Comment = undefined;
  public selectedComment: Comment = undefined;

  constructor(private jsonPlaceholderService: JsonPlaceholderService, private carService: CarService) {
    this.comments$ = jsonPlaceholderService.getRows("comment");
    this.checked = false;
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  onRowSelect(event) {
    console.log(`onRowSelect: ${JSON.stringify(event)}`);
    this.comment = event.data;
    this.selectedEditableCar = event.data;
  }

  onRowClick(event) {
    console.log(`onRowClick: ${JSON.stringify(event)}`);
    this.selectedEditableCar = event.data;
  }

  onRowUnselect(event) {
    console.log(`onRowUnselect: ${JSON.stringify(event)}`);
    this.selectedEditableCar = event.data;
  }
}
