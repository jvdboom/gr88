import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../models/pokemon";
import { PokedexService } from "../../services/pokedex.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"]
})
export class PokedexComponent implements OnInit {
  pokemon: Pokemon[] = [];

  /**
   * A boolean that represents
   * if we are currently loading data.
   */
  isLoading: boolean = false;

  /**
   * This boolean will be set
   * to true if an error occurred.
   */
  error: boolean = false;


  public forms$: Observable<any[]>;
  constructor(private pokedexService: PokedexService) { }

  /**
     * A lifecycle method
     * that is automatically
     * envoked when the component
     * is created.
     */
  ngOnInit() {
    /**
     * Load the initial data.
     */
    // this.loadMore();
    // this.form();
  }

  form(aID: number) {
    console.log(`form:${aID}`);
    this.forms$ = this.pokedexService.pokemonForm(1);
  }

  loadMore() {
    // this.isLoading = true;

    // /**
    //  * Use the Pokedex service
    //  * to load the next 9 Pokemon.
    //  */
    // this.pokedexService.getPokemon(this.pokemon.length, 9)
    //   .then(pokemon => {
    //     pokemon = pokemon.map(p => {
    //       p.imageLoaded = false;
    //       return p;
    //     });
    /**
* If loading was successful
* we append the result to the list.
*/
    //   this.pokemon = this.pokemon.concat(pokemon);
    //   this.isLoading = false;
    //   this.error = false;
    // })
    // .catch(() => {
    //   this.error = true;
    //   this.isLoading = false;
    // });
  }

}
