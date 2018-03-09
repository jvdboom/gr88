import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/primeng";
import { Car } from "../../../models/car";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { Observable } from "rxjs/Observable";
import { Character } from "../../../models/character";
import { MarvelService } from "../../../services/marvel.service";
import { Marvel, Result } from "../../../models/marvel";


@Component({
  selector: "app-marvel-data-view",
  templateUrl: "./marvel-data-view.component.html",
  styleUrls: ["./marvel-data-view.component.css"]
})
export class MarvelDataViewComponent implements OnInit {
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
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

}
