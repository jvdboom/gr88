import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { Observable } from "rxjs/Observable";
import { Photo } from "../../../models/photo";
import { Request } from "../../../models/request";
@Component({
  selector: "app-table-turbo",
  templateUrl: "./table-turbo.component.html",
  styleUrls: ["./table-turbo.component.css"]
})
export class TableTurboComponent implements OnInit {

  public photos$: Observable<any[]>;
  public requests$: Observable<Request[]>;
  public first: number = 0;

  public cols: any[];
  public selectedPhoto: Photo;
  public totalPhotos: number;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.cols = [
      { field: "id", header: "id" },
      { field: "url", header: "url" },
      { field: "title", header: "title" },
      { field: "thumbnailUrl", header: "thumbnailUrl" }
    ];

    this.cols = [];
    this.cols = [
      { field: "RequestID", header: "ID" },
      { field: "TenantName", header: "Tenant" },
      { field: "CurrentState", header: "CurrentState" },
      { field: "FileName", header: "FileName" },
      { field: "DateTime", header: "DateTime" },
    ];

    this.photos$ = jsonPlaceholderService.getRows("photo");
    this.photos$.subscribe((res: any[]) => {
      this.totalPhotos = res.length;
    });
  }


  ngOnInit() {
    this.requests$ = this.jsonPlaceholderService.getRows4TurboTable();
    // this.photos$.subscribe((res: any[]) => {
    //   this.totalPhotos = res.length;
    // });

  }

  reset() {
    this.first = 0;
  }

  save() {

  }

  delete() {

  }

  paginate(event) {
    console.log(event);

    event.first = 0;
    event.rows = event.rows;
    event.pageCount = this.totalPhotos / event.rows;

    console.log(event);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
