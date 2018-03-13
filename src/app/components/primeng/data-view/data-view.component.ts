import { Component, OnInit } from "@angular/core";
import { Car } from "../../../models/car";
import { Observable } from "rxjs/Observable";
import { SelectItem } from "primeng/primeng";
import { Result, Marvel } from "../../../models/marvel";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { MarvelService } from "../../../services/marvel.service";

@Component({
  selector: "app-data-view",
  templateUrl: "./data-view.component.html",
  styleUrls: ["./data-view.component.css"]
})
export class DataViewComponent implements OnInit {
  cars: Car[];
  cars$: Observable<Car[]>;
  json: string;
  selectedCar: Car;
  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  activeIndex: number = -1;

  results: Result[];

  public characters$: Observable<Marvel>;
  public characters: any;

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private marvelService: MarvelService) { }

  ngOnInit() {
    this.characters$ = this.marvelService.getMarvel(`characters`);
    this.characters$.subscribe(marvel => {
      this.results = marvel.data.results;
    });


    this.cars$ = this.jsonPlaceholderService.getRows4TurboTableFile(`cars-small`);
    this.cars$.subscribe(res => {
      res.forEach(re => {
        console.log(re);
      });
    });

    this.sortOptions = [
      { label: "Newest First", value: "!year" },
      { label: "Oldest First", value: "year" },
      { label: "Brand", value: "brand" }
    ];
  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}