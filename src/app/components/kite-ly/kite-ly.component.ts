import { Component, OnInit } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-kite-ly",
  templateUrl: "./kite-ly.component.html",
  styleUrls: ["./kite-ly.component.css"]
})
export class KiteLyComponent implements OnInit {

  res: Observable<any>;
  pag: Observable<any>;

  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getExample();
  }

  getExample() {
    this.headers = new HttpHeaders({ Authorization: `ApiKey 71988c0a9e38105801fff534648dcbfc33c7b52e` });

    this.res = this.http
      .get(`https://api.kite.ly/v4.0/address/search/?country_code=USA&search_term=1+Infinite+Loop`, { headers: this.headers });

    // tslint:disable-next-line:max-line-length
    this.headers = new HttpHeaders({ Authorization: `ApiKey 71988c0a9e38105801fff534648dcbfc33c7b52e:bcce161c327c2bdd52b44ee823b64cb16c6368b7` });
      this.pag  = this.http
      .get(`https://api.kite.ly/v4.0/order/?offset=30&limit=10`, { headers: this.headers });
  }



}


// curl "https://api.kite.ly/v4.0/address/search/?country_code=USA&search_term=1+Infinite+Loop" \
//   -H "Authorization: ApiKey 71988c0a9e38105801fff534648dcbfc33c7b52e:<your_secret_key>"