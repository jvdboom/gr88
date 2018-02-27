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
          console.log(`Download in progress! ${kbLoaded}Kb loaded`);
          break;
        case HttpEventType.Response:
          console.log("😺 Done!", event.body);
      }
    });
  }


  /**
   * @param aTableName, the name of the table to get all rows from i.e. Tenant
   * @param aFilter i.e. where=Active=true , where=TenantID=x
   * http://172.28.97.19:8088/cosmos-ccm/dbstoredprocedure/GetRequestsViewForTenant?param1=0&param2=20000&param3=-1&param4=3&param5=0
   * http://172.28.97.19:8088/cosmos-ccm/dbstoredprocedure/GetRequestsViewForTenant?param1=0&param2=2000&param3=-1&param4=0&param5=0
   * TODO: change in future
   */
  getRows4TurboTable(aRows: number = 2000): Observable<any[]> {
    // tslint:disable-next-line:max-line-length
    const url = `http://172.28.97.19:8088/cosmos-ccm/dbstoredprocedure/GetRequestsViewForTenant?param1=0&param2=${aRows.toString()}&param3=-1&param4=0&param5=0`;
    return this.http
      .get<any[]>(url)
      .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
  }

  //   /**
  //  * @param aTableName, the name of the table to get all rows from i.e. Tenant
  //  * @param aFilter i.e. where=Active=true , where=TenantID=x
  //  * http://localhost:8088/cosmos-ccm/dbstandard/CountryCode?where=Active=true
  //  * TODO: change in future
  //  */
  // getRows(aTableName: string, aFilter: string = ""): Observable<any[]> {
  //   const params = new HttpParams(
  //     { fromString: aFilter }
  //   );
  //   if (aTableName) {
  //     return this.http
  //       .get<any[]>(`${this.dbStandard}${aTableName}`, { params: params })
  //       .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
  //   } else {
  //     return new Observable<any[]>();
  //   }
  // }

}


interface Post {
  title: string;
  body: string;
}
