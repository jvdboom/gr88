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
        label: "About",
        icon: "fa-info",
        items: [
          { label: "About", icon: "fa-info", routerLink: ["about"] },
          { label: "Blog", icon: "fa-rss", url: "https://blog.angular.io/", target: "blank" },
          { label: "CLI", icon: "fa-wikipedia-w", url: "https://github.com/angular/angular-cli/wiki", target: "blank" },
          { label: "Tutorial", icon: "fa-wikipedia-w", url: "https://angular.io/tutorial", target: "blank" }
        ]
      }
    ];
  }
}
