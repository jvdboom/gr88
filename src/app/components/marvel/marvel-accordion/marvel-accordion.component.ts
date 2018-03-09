import { Component, OnInit } from "@angular/core";
import { MarvelService } from "../../../services/marvel.service";
import { Character } from "../../../models/character";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-marvel-accordion",
  templateUrl: "./marvel-accordion.component.html",
  styleUrls: ["./marvel-accordion.component.css"]
})
export class MarvelAccordionComponent implements OnInit {
  public characters$: Observable<Character[]>;
  public characters: any;
  activeIndex: number = -1;


  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.characters$ = this.marvelService.getMarvelBasic(`characters`);
    this.characters$.subscribe(response => {
      this.characters = response;
    });
  }

}
