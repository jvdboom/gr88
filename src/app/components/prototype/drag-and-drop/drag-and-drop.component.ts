import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.css"]
})
export class DragAndDropComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  listBoxers: Array<string> = ["Sugar Ray Robinson", "Muhammad Ali", "George Foreman", "Joe Frazier", "Jake LaMotta", "Joe Louis", "Jack Dempsey", "Rocky Marciano", "Mike Tyson", "Oscar De La Hoya"];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
  item: any;

  constructor() { }

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
    this.listBoxers = [...this.listBoxers, item];
    console.log(`click3a:${JSON.stringify(event)}`);
    console.log(`click3a:${JSON.stringify(item)}`);
  }

  onRowDblClick(event: any, item: any) {
    this.listTeamOne = this.listTeamOne.filter(x => x !== item);
    this.listBoxers = [...this.listBoxers, item];
    console.log(`click3a:${JSON.stringify(event)}`);
    console.log(`click3a:${JSON.stringify(item)}`);
  }

  click3b(event: any, item: any) {
    this.listTeamTwo = this.listTeamTwo.filter(x => x !== item);
    this.listBoxers = [...this.listBoxers, item];
    console.log(`click3b:${JSON.stringify(event)}`);
    console.log(`click3b:${JSON.stringify(item)}`);
  }

}
