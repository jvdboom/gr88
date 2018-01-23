import { Component, OnInit } from "@angular/core";
import { StandardService } from "../../services/standard.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-simple-http-component",
  templateUrl: "./simple-http-component.html",
  styleUrls: ["./simple-http-component.css"]
})
export class SimpleHttpComponent implements OnInit {

  data: Object;
  data$: Observable<Object>;

  loading: boolean;

  constructor(private standardService: StandardService) { }

  ngOnInit() {
    this.data$ = this.standardService.makeRequest();
  }

  makeRequest() {
    this.loading = true;
    this.standardService.makeRequest()
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });

  }

}
