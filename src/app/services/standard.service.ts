import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StandardService {

  constructor(private http: HttpClient) { }

  makeRequest() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts/1");
    // .subscribe(data => {
    //   this.data = data;
    //   this.loading = false;
    // });
  }

}
