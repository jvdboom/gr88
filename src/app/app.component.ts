import { Component, OnInit } from "@angular/core";
import { Menubar, MenuItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: "Book",
        icon: "fa-info",
        items: [
          { label: "SimpleHttp", icon: "fa-info", routerLink: ["simplehttp"] }
        ]
      },
      {
        label: "Examples",
        icon: "fa-info",
        items: [
          { label: "Kite.ly", icon: "fa-info", routerLink: ["kitely"] },
          { label: "Comments", icon: "fa-info", routerLink: ["comments"] },
          { label: "Posts", icon: "fa-info", routerLink: ["posts"] },
          { label: "Configuration Settings Sample", icon: "fa-info", routerLink: ["productdetail"] },
          { label: "Editable Table", icon: "fa-info", routerLink: ["editabletable"] }
        ]
      },
      {
        label: "Pokedex",
        icon: "fa-info",
        items: [
          { label: "Pokedex", icon: "fa-info", routerLink: ["pokedex"] },
        ]
      },
      {
        label: "Primeng",
        icon: "fa-info",
        items: [
          { label: "Mock", icon: "fa-info", routerLink: ["primengmock"] },
          { label: "DataView", icon: "fa-info", routerLink: ["dataview"] },
          { label: "TurboTable", icon: "fa-info", routerLink: ["tableturbo"] },
          { label: "Accordion", icon: "fa-info", routerLink: ["accordion"] },
          { label: "Validation", icon: "fa-info", routerLink: ["validation"] },
          { label: "Pick-List", icon: "fa-info", routerLink: ["picklist"] },
          { label: "Drag & Drop", icon: "fa-info", routerLink: ["draganddrop"] },
        ]
      },
      {
        label: "Prototype",
        icon: "fa-comment",
        items: [
          { label: "Drag and Drop Items", icon: "fa-info", routerLink: ["draganddropitems"] },
          { label: "Drag and Drop", icon: "fa-info", routerLink: ["prototypedraganddrop"] },
        ]
      },
      {
        label: "Marvel",
        icon: "fa-comment",
        items: [
          { label: "Mocking", icon: "fa-info", routerLink: ["marvelmock"] },
          { label: "Accordion", icon: "fa-info", routerLink: ["marvelaccordion"] },
          { label: "DataView", icon: "fa-info", routerLink: ["marveldataview"] }
        ]
      },
      {
        label: "About",
        icon: "fa-info",
        items: [
          { label: "About", icon: "fa-info", routerLink: ["about"] },
          { label: "Blog", icon: "fa-rss", url: "https://blog.angular.io/", target: "blank" },
          { label: "CLI", icon: "fa-wikipedia-w", url: "https://github.com/angular/angular-cli/wiki", target: "blank" },
          { label: "Tutorial", icon: "fa-wikipedia-w", url: "https://angular.io/tutorial", target: "blank" },
          { label: "Setting example", icon: "fa-wikipedia-w", url: "http://www.codemag.com/article/1801021", target: "blank" },
          {
            label: "Pokedex example", icon: "fa-wikipedia-w",
            url: "https://medium.com/the-web-tub/creating-a-pok%C3%A9mon-application-using-the-angular2-cli-53080dd9942f", target: "blank"
          }
        ]
      }
    ];
  }
}
