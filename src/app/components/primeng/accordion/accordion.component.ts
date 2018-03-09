import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Tenant } from "../../../models/tenant";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent implements OnInit {
  public tenants$: Observable<Tenant[]>;
  public tenants: Tenant[];
  public tenantDummyList: number[] = [];
  public activeIndex = -1;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit() {
    this.jsonPlaceholderService.getRows4TurboTableFile(`tenant`)
      .subscribe(res => {
        this.tenants = res;
        this.tenantDummyList.length = this.tenants.length;
      });

    // this.jsonPlaceholderService.getRows4TurboTableFile(`tenant`)
    //   .subscribe((res: tenant[]) => {
    //     this.requests$ = res;
    //   });
  }

}
