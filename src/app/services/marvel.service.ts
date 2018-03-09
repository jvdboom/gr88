import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpEvent, HttpRequest, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ErrorService } from "./error.service";
import { Md5 } from "md5-typescript";
import { environment } from "../../environments/environment";
import { Marvel } from "../models/marvel";


@Injectable()
export class MarvelService {
  private url = "https://jsonplaceholder.typicode.com/";

  // private path = require("path");
  // private request = require("request-promise");
  // // private md5 = require("md5");

  // private marvelApiUrl = "http://gateway.marvel.com/v1/public/";
  public publicKey = "74305950cd8772223574e71ed982c578";
  public baseUrl = `http://gateway.marvel.com/v1/public/`;

  private privateKey = "";

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

  /**TODO: Work in progress
  * npm install md5-typescript -save
  */
  public getSeries(): Observable<any[]> {
    let url = `${this.baseUrl}series?apikey=${this.publicKey}`; // &ts=${timeStamp}&hash=${hash}`;

    if (environment.gr88 === false) {
      /** ServerSide auth */
      const timeStamp = new Date().getTime();
      const hash = Md5.init(`${timeStamp}${this.privateKey}${this.publicKey}`);
      url = url + `&ts=${timeStamp}&hash=${hash}`;
    }

    console.log(url);

    return this.http
      .get<any[]>(url)
      .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
  }


  getMarvelBasic(aData: string): Observable<any[]> {
    let url = `${this.baseUrl}${aData}?apikey=${this.publicKey}`; // &ts=${timeStamp}&hash=${hash}`;

    if (environment.gr88 === false) {
      /** ServerSide auth */
      const timeStamp = new Date().getTime();
      const hash = Md5.init(`${timeStamp}${this.privateKey}${this.publicKey}`);
      url = url + `&ts=${timeStamp}&hash=${hash}`;
    }

    return this.http
      .get<any[]>(url)
      .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
  }

  getMarvel(aApi: string): Observable<Marvel> {
    let url = `${this.baseUrl}${aApi}?apikey=${this.publicKey}`; // &ts=${timeStamp}&hash=${hash}`;

    if (environment.gr88 === false) {
      /** ServerSide auth */
      const timeStamp = new Date().getTime();
      const hash = Md5.init(`${timeStamp}${this.privateKey}${this.publicKey}`);
      url = url + `&ts=${timeStamp}&hash=${hash}`;
      console.log(url);
    }
    console.log(url);
    
    return this.http
      .get<any[]>(url)
      .catch((aHttpErrorResponse: HttpErrorResponse) => this.errorService.handleError(aHttpErrorResponse));
  }
}
