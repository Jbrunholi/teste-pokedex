import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  currentPage: number = 0;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: { target: { complete: () => void; }; } | undefined ) {
    this.pokeapiService.getPokemonList(20, this.currentPage * 20).subscribe(response => {
      this.pokemons = this.pokemons.concat(response.results);
      if (event) {
        event.target.complete();
      }
    });
  }

  loadMore(event: { target: { complete: () => void; }; } | undefined) {
    this.currentPage++;
    this.loadPokemons(event);
  }
}
