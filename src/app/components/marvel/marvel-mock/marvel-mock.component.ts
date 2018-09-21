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
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      if (!this.id) {
        this.id = 1011334;
      }
      this.character$ = marvelService.getMarvelDetail(`characters`, this.id);
    });

  }

  ngOnInit() {
  }

}
