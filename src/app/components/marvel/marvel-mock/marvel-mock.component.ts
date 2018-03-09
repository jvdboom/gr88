import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { MarvelService } from "../../../services/marvel.service";
import { Serie } from "../../../models/serie";

@Component({
  selector: "app-marvel-mock",
  templateUrl: "./marvel-mock.component.html",
  styleUrls: ["./marvel-mock.component.css"]
})
export class MarvelMockComponent implements OnInit {
  public comments$: Observable<Comment[]>;
  public heroes$: Observable<any[]>;
  public series$: Observable<Serie[]>;
  public seriesData: string;
  public series: any;
  public activeIndex = -1;

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private marvelService: MarvelService) {
    this.comments$ = jsonPlaceholderService.getRows("comment");
    this.series$ = marvelService.getMarvelBasic(`series`);
    this.series$.subscribe(response => {
      this.series = response;
      this.seriesData = JSON.stringify(response);
    });

    // this.series$ = marvelService.getHeroes();

  }

  ngOnInit() {
  }

}
