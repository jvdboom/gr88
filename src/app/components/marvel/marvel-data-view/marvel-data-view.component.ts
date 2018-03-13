import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/primeng";
import { Car } from "../../../models/car";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { Observable } from "rxjs/Observable";
import { Character } from "../../../models/character";
import { MarvelService } from "../../../services/marvel.service";
import { Marvel, Result } from "../../../models/marvel";
import { Router } from "@angular/router";


@Component({
  selector: "app-marvel-data-view",
  templateUrl: "./marvel-data-view.component.html",
  styleUrls: ["./marvel-data-view.component.css"]
})
export class MarvelDataViewComponent implements OnInit {
  cars$: Observable<Car[]>;
  public limit = 20;

  public marvels$: Observable<Marvel>;

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private marvelService: MarvelService,
    private router: Router) {
  }

  ngOnInit() {
    this.cars$ = this.jsonPlaceholderService.getRows4TurboTableFile(`cars-small`);
    this.cars$.subscribe(res => {
      res.forEach(re => {
        console.log(re);
      });
    });


    this.marvels$ = this.marvelService.getMarvel(`characters`);
  }

  onSelect(aCharacterID: number) {
    console.log(`character:${aCharacterID}`);
    this.router.navigate(["/marvelmock", aCharacterID]);
  }


}
