import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
import { HomePage } from '../home/home.page';
import { FavoriteService } from 'src/app/services/favorite.service';

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
    private pokeapiService: PokeapiService,
    private homePage: HomePage,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeapiService.getPokemonDetails(name).subscribe(data => {
        this.pokemon = data;
        this.isFavorite = this.favoriteService.isFavorite(this.pokemon);
      });
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteService.toggleFavorite(this.pokemon);
  }
}
