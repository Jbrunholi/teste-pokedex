import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  currentPage: number = 0;

  constructor(
    private pokeapiService: PokeapiService,
    private router: Router,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: { target: { complete: () => void; }; } | undefined) {
    this.pokeapiService.getPokemonList(20, this.currentPage * 20).subscribe(response => {
      const pokemonDetailsObservables = response.results.map((pokemon: any) => {
        return this.pokeapiService.getPokemonDetails(pokemon.name);
      });

      forkJoin(pokemonDetailsObservables).subscribe(pokemonDetailsArray => {
        this.pokemons = this.pokemons.concat(pokemonDetailsArray);
        this.filteredPokemons = this.pokemons;
        if (event) {
          event.target.complete();
        }
      });
    });
  }

  loadData(event: any) {
    this.currentPage++;
    this.loadPokemons(event);
  }

  loadMore(event: { target: { complete: () => void; }; } | undefined) {
    this.currentPage++;
    this.loadPokemons(event);
  }

  goToDetails(pokemon: any) {
    this.router.navigate(['/details', pokemon.name]);
  }

  filterPokemons(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
  }

  toggleFavorite(pokemon: any) {
    this.favoriteService.toggleFavorite(pokemon);
  }

  get favoritePokemons() {
    return this.favoriteService.getFavorites();
  }
}
