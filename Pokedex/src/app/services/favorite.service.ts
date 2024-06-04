import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritePokemons: any[] = [];

  constructor() {}

  getFavorites() {
    return this.favoritePokemons;
  }

  isFavorite(pokemon: any): boolean {
    return this.favoritePokemons.some(fav => fav.name === pokemon.name);
  }

  addFavorite(pokemon: any) {
    if (!this.isFavorite(pokemon)) {
      this.favoritePokemons.push(pokemon);
    }
  }

  removeFavorite(pokemon: any) {
    this.favoritePokemons = this.favoritePokemons.filter(fav => fav.name !== pokemon.name);
  }

  toggleFavorite(pokemon: any) {
    if (this.isFavorite(pokemon)) {
      this.removeFavorite(pokemon);
    } else {
      this.addFavorite(pokemon);
    }
  }
}
