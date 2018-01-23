import { Injectable } from "@angular/core";
/**
 * Import the Http service
 */
import { HttpClient, HttpEventType, HttpEvent, HttpRequest, HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
/**
 * Adds the toPromise() method to
 * convert an Observable to a Promise.
 */
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokedexService {
  // private baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";
  private baseUrl = `https://pokeapi.co/api/v2/pokemon-form/1/`;
  private baseSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  private headers: HttpHeaders;
  private formUrl = `https://pokeapi.co/api/v2/pokemon-form/1/`;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set("Content-Type", "application/json");
  }

  // https://pokeapi.co/api/v2/pokemon-form/3/

  pokemonForm(aID: number = 0): Observable<any[]> {
    const params = new HttpParams().set("", aID.toString());
    // return this.http.get<any[]>(`${this.formUrl}`, { headers: this.headers, params });
    return this.http.get<any[]>(`${this.formUrl}`, { headers: this.headers});
  }

  // getPokemon(offset: number, limit: number) {
  //   return this.http.get(`${ this.baseUrl }?offset = ${ offset }& limit=${ limit } `)
  //     .toPromise()
  //     .then(response => response.json().results)
  //     .then(items => items.map((item, idx) => {
  //       const id: number = idx + offset + 1;
  //       return {
  //         name: item.name,
  //         sprite: `${ this.baseSpriteUrl } ${ id }.png`,
  //         id
  //       };
  //     }));
  // }
  // https://pokeapi.co/api/v2/pokemon-form/1/

  //   getPokemonObs(offset: number, limit: number) {
  //     return this.http.get<any[]>(`${this.baseUrl}?offset = ${offset}& limit=${limit} `);
  //     // .toPromise()
  //     // .then(response => response.json().results)
  //     // .then(items => items.map((item, idx) => {
  //     //   const id: number = idx + offset + 1;
  //     //   return {
  //     //     name: item.name,
  //     //     sprite: `${ this.baseSpriteUrl } ${ id }.png`,
  //     //     id
  //     //   };
  //     // }));
  //   }
}
