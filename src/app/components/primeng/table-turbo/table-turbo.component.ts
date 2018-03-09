import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { Observable } from "rxjs/Observable";
import { Photo } from "../../../models/photo";
import { Request } from "../../../models/request";
import { SelectItem } from "primeng/primeng";
import { stringify } from "querystring";
@Component({
  selector: "app-table-turbo",
  templateUrl: "./table-turbo.component.html",
  styleUrls: ["./table-turbo.component.css"]
})
export class TableTurboComponent implements OnInit {

  public photos$: Observable<any[]>;
  public requests$: Observable<Request[]>;
  public first: number = 0;
  public rows = 5;
  public statusList: SelectItem[];

  public cols: any[];
  public selectedPhoto: Photo;
  public totalPhotos: number;
  public selectedRequest: Request;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.cols = [
      { field: "id", header: "id" },
      { field: "url", header: "url" },
      { field: "title", header: "title" },
      { field: "thumbnailUrl", header: "thumbnailUrl" }
    ];

    this.statusList = [
      { label: "Choose", value: undefined },
      { label: "Registered", value: "Registered" },
      { label: "RequestError", value: "RequestError" },
      { label: "RequestFinished", value: "RequestFinished" },
      { label: "RequestRestarted", value: "RequestRestarted" },
    ];

    this.cols = [];
    this.cols = [
      { field: "RequestID", header: "ID" },
      { field: "TenantName", header: "Tenant" },
      { field: "CurrentState", header: "CurrentState" },
      { field: "FileName", header: "FileName" },
      { field: "DateTime", header: "DateTime" },
    ];

    // this.photos$ = jsonPlaceholderService.getRows("photo");
    // this.photos$.subscribe((res: any[]) => {
    //   this.totalPhotos = res.length;
    // });
  }


  ngOnInit() {
    // this.requests$ = this.jsonPlaceholderService.getRows4TurboTable();
    this.requests$ = this.jsonPlaceholderService.getRows4TurboTableFile(`request`);
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

  onRowSelect(event: any) {
    const request: Request = event.data;
    console.log(`onRowSelect->request:`, stringify(request));
  }

  onRowExpand(event: any) {
    const request: Request = event.data;
    console.log(`onRowExpand->request:`, stringify(request));
  }

  onPage(event: any) {
    console.log(`onPage->number and index:`, stringify(event));
  }


  paginate(event) {
    console.log(event);

    event.first = 0;
    event.rows = event.rows;
    event.pageCount = this.totalPhotos / event.rows;

    console.log(event);
    // event.first = Index of the first record
    // event.rows = Number of rows to display in new page
    // event.page = Index of the new page
    // event.pageCount = Total number of pages
  }

}
