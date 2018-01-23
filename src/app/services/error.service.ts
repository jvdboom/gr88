import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorService {

  constructor() { }

  public handleError(aHttpErrorResponse: HttpErrorResponse): Observable<any> {

    console.log(`ErrorService.handleError(${aHttpErrorResponse.message})`);
    let errorMessage = "";
    // TODO: Check for more instaceof
    // and make ajustable error handling via configuration
    // like an page for error 400
    // an other page for 500 etc....
    // make some logging
    if (aHttpErrorResponse && aHttpErrorResponse.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${aHttpErrorResponse.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server status code: ${aHttpErrorResponse.status},
                      Server status text: ${aHttpErrorResponse.statusText},
                      error message is:   ${aHttpErrorResponse.message}`;
    }

    // TODO: Use this error informetion for redirect and logging
    return Observable.throw(new Observable<any>());

  }

}
