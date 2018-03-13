import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { MarvelService } from "../../../services/marvel.service";
import { Serie } from "../../../models/serie";
import { ActivatedRoute } from "@angular/router";
import { Marvel } from "../../../models/marvel";

@Component({
  selector: "app-marvel-mock",
  templateUrl: "./marvel-mock.component.html",
  styleUrls: ["./marvel-mock.component.css"]
})
export class MarvelMockComponent implements OnInit {
  public character$: Observable<Marvel>;
  private sub: any;
  private id: number;

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private marvelService: MarvelService,
    private route: ActivatedRoute) {
    // this.comments$ = jsonPlaceholderService.getRows("comment");
    // this.series$ = marvelService.getMarvelBasic(`series`);
    // this.series$.subscribe(response => {
    //   this.series = response;
    //   this.seriesData = JSON.stringify(response);
    // });
    // this.series$ = marvelService.getHeroes();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.character$ = marvelService.getMarvelDetail(`characters`, this.id);
    });

  }

  ngOnInit() {
  }

}
