import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeapiService.getPokemon(name).subscribe(response => {
        this.pokemon = response;
        this.isFavorite = this.pokeapiService.isFavorite(name);
      });
    }
  }

  toggleFavorite() {
    if (this.pokemon) {
      const name = this.pokemon.name;
      if (this.isFavorite) {
        this.pokeapiService.removeFavorite(name);
      }
      else {
        this.pokeapiService.addFavorite(name);
      }
      this.isFavorite = !this.isFavorite;
    }
  }
}
