import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpEvent, HttpRequest, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ErrorService } from "./error.service";

@Injectable()
export class JsonPlaceholderService {

  private url = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient, private errorService: ErrorService) { }



  getRows(aModel: string, aFilter: string = ""): Observable<any[]> {
    const params = new HttpParams(
      { fromString: aFilter }
    );

    if (aModel) {
      return this.http
        .get<any[]>(`${this.url}${aModel}s`, { params })
        .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
    } else {
      return new Observable<any[]>();
    }
  }

  getData() {
    const req = new HttpRequest("GET", this.url, {
      reportProgress: true
    });

    this.http.request(req).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("Request sent!");
          break;
        case HttpEventType.ResponseHeader:
          console.log("Response header received!");
          break;
        case HttpEventType.DownloadProgress:
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
          break;
        case HttpEventType.Response:
          console.log("😺 Done!", event.body);
      }
    });
  }

}


interface Post {
  title: string;
  body: string;
}
