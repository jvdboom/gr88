import { Component, OnInit } from "@angular/core";
import { MarvelService } from "../../../services/marvel.service";
import { Observable } from "rxjs/Observable";
import { Marvel } from "../../../models/marvel";
import { Character } from "../../../models/character";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.css"]
})
export class DragAndDropComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  public listCharacters: Array<string> = [];
  public optionsCharacters: SelectItem[] = [];


  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
  item: any;

  public characters$: Observable<Character[]>;
  // public character: Character[];
  // public characters: any;

  private sub: any;
  private id: number;

  constructor(private marvelService: MarvelService) {
    this.marvelService.getMarvelBasic(`characters`)
      .subscribe((characters: Character) => {
        this.optionsCharacters.push({ label: "Select Character", value: undefined });
        characters.data.results.forEach(character => {
          this.listCharacters.push(character.name);
          this.optionsCharacters.push({ label: character.name, value: character.name });
        });
      });
  }

  ngOnInit() {
  }

  click1(event: any) {
    // console.log(`click1:${JSON.stringify(event)}`);
  }
  click1a(event: any) {
    // console.log(`click1a:${JSON.stringify(event)}`);
  }
  click1b(event: any) {
    // console.log(`click1b:${JSON.stringify(event)}`);
  }

  click2(event: any) {
    // console.log(`click2:${JSON.stringify(event)}`);
  }
  click2a(event: any) {
    // console.log(`click2a:${JSON.stringify(event)}`);
  }
  click2b(event: any) {
    // console.log(`click2b:${JSON.stringify(event)}`);
  }

  click3(event: any, item: any) {
    console.log(`click3:${JSON.stringify(event)}`);
    console.log(`click3:${JSON.stringify(item)}`);
  }
  click3a(event: any, item: any) {
    this.listTeamOne = this.listTeamOne.filter(x => x !== item);
    this.listCharacters = [...this.listCharacters, item];
    console.log(`click3a:${JSON.stringify(event)}`);
    console.log(`click3a:${JSON.stringify(item)}`);
  }

  onRowDblClick(event: any, item: any) {
    this.listTeamOne = this.listTeamOne.filter(x => x !== item);
    this.listCharacters = [...this.listCharacters, item];
    console.log(`click3a:${JSON.stringify(event)}`);
    console.log(`click3a:${JSON.stringify(item)}`);
  }

  click3b(event: any, item: any) {
    // this.listTeamTwo = this.listTeamTwo.filter(x => x !== item);
    // this.listCharacters = [...this.listCharacters, item];
    console.log(`click3b:${JSON.stringify(event)}`);
    console.log(`click3b:${JSON.stringify(item)}`);
  }

  delete1(event: any, aCharacter: string) {
    console.log(`delete1:${JSON.stringify(event)} `, aCharacter);
  }

  onMove(event: any, aNumber: number) {
    console.log(`onMove:${JSON.stringify(event)} `, event);
  }

}
