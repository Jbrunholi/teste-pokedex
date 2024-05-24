import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  private favorites: Set<string> = new Set();

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }

  getPokemonList(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  addFavorite(name: string) {
    this.favorites.add(name);
  }

  removeFavorite(name: string) {
    this.favorites.delete(name);
  }

  isFavorite(name: string): boolean {
    return this.favorites.has(name);
  }
}
