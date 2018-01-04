import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "./app-settings";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import "rxjs/add/observable/of";
import { HttpClient } from "@angular/common/http";

const SETTINGS_KEY = "configuration";

@Injectable()
export class AppSettingsService {

  constructor(private httpClient: HttpClient) { }

  getSettings(): Observable<AppSettings> {
    const settings = new AppSettings();
    return Observable.of<AppSettings>(settings);
  }

  saveSettings(settings: AppSettings) {
    localStorage.setItem(SETTINGS_KEY,
      JSON.stringify(settings));
  }

  deleteSettings(): void {
    localStorage.removeItem(SETTINGS_KEY);
  }

  private handleErrors(error: any):
    Observable<AppSettings> {
    // Log the error to the console
    switch (error.status) {
      case 404:
        console.error("Can't find file: " + `SETTINGS_LOCATION`);
        break;
      default:
        console.error(error);
        break;
    }
    // Return default configuration values
    return Observable.of<AppSettings>
      (new AppSettings());
  }

}
