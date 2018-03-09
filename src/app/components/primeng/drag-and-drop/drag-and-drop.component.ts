import { Component, OnInit } from "@angular/core";
import { Car } from "../../../models/car";
import { Observable } from "rxjs/Observable";
import { filter, findIndex } from "rxjs/operators";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.css"]
})
export class DragAndDropComponent implements OnInit {
  availableCars: Car[];

  selectedCars: Car[];
  selectedCar: Car;

  draggedCar: Car;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit() {
    this.selectedCars = [];
    this.jsonPlaceholderService.getRows4TurboTableFile(`cars-small`)
      .subscribe(res => {
        this.availableCars = res;
      });
  }

  dragStart(event, car: Car) {
    this.draggedCar = car;
  }

  drop(event) {
    if (this.draggedCar) {
      const draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [...this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter((val, i) => i !== draggedCarIndex);
      this.draggedCar = null;
    }
  }
  onRowDblclick(event: any) {

    if (event.data) {
      const carIndex = this.selectedCars.findIndex(x => x.vin === event.data.vin);
      this.availableCars = [...this.availableCars, event.data];

      // this.availableCars = this.availableCars.filter((val, i) => i !== carIndex);
      // this.selectedCars = this.availableCars.filter((val, i) => i !== carIndex);
      // this.selectedCars = this.availableCars.filter((val, i) => i !== carIndex);
      this.selectedCars = this.selectedCars.splice(carIndex, 1);

      // this.selectedCars.splice(this.selectedCars.findIndex(x => x.vin === event.data.vin), 1);
      // this.selectedCars = this.availableCars.filter((val, i) => i !== carIndex);


      console.log(carIndex);


    }
  }


  dragEnd(event) {
    this.draggedCar = null;
  }

  findIndex(car: Car) {
    let index = -1;
    for (let i = 0; i < this.availableCars.length; i++) {
      if (car.vin === this.availableCars[i].vin) {
        index = i;
        break;
      }
    }
    return index;
  }

}