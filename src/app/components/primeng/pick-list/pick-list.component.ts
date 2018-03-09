import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { Car } from "../../../models/car";

@Component({
  selector: "app-pick-list",
  templateUrl: "./pick-list.component.html",
  styleUrls: ["./pick-list.component.css"]
})
export class PickListComponent implements OnInit {

  sourceCars: Car[];
  targetCars: Car[];

  list1: any[];
  list2: any[];

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.list1 = ["een", "twee", "drie"];
    this.list2 = [];
  }

  ngOnInit() {
    this.jsonPlaceholderService.getRows4TurboTableFile(`cars-small`)
      .subscribe(res => {
        this.sourceCars = res;
      });
    this.targetCars = [];
  }

}
