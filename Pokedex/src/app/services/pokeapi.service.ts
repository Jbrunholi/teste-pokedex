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

  getPokemonDetails(name: string) {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`);
  }

  getPokemonList(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonSpecies(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon-species/${id}`);
  }

  getEvolutionChainByUrl(url: string): Observable<any> {
    return this.http.get(url);
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
