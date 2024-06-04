import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
<<<<<<< HEAD
import { SharedModule } from 'src/app/shared/shared.module';
=======
import { HomePage } from '../home/home.page';
import { FavoriteService } from 'src/app/services/favorite.service';
>>>>>>> 4618967c169ccd752e3f116c97f8ac331d2cc9a7

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any = {};
  isFavorite: boolean = false;
  evolveTo: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokeapiService: PokeapiService,
<<<<<<< HEAD
    private router: Router
=======
    private homePage: HomePage,
    private favoriteService: FavoriteService
>>>>>>> 4618967c169ccd752e3f116c97f8ac331d2cc9a7
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeapiService.getPokemonDetails(name).subscribe(data => {
        this.pokemon = data;
<<<<<<< HEAD
        if (data.species && data.species.url) {
          this.loadEvolutionChain(data.species.url);
        }
      });
    }
  }

  loadEvolutionChain(speciesUrl: string) {
    const speciesId = speciesUrl.split('/').filter(Boolean).pop();
    if (!speciesId) {
      console.error('Invalid species URL:', speciesUrl);
      return;
    }

    this.pokeapiService.getPokemonSpecies(speciesId).subscribe((species: any) => {
      if (species.evolution_chain && species.evolution_chain.url) {
        this.pokeapiService.getEvolutionChainByUrl(species.evolution_chain.url).subscribe((evolutionChain: any) => {
          let evolutionData = evolutionChain.chain;
          while (evolutionData) {
            if (evolutionData.species.name === this.pokemon.name && evolutionData.evolves_to.length > 0) {
              const nextEvolution = evolutionData.evolves_to[0];
              if (nextEvolution && nextEvolution.species && nextEvolution.species.name) {
                this.evolveTo = this.capitalizeFirstLetter(nextEvolution.species.name);
              } else {
                this.evolveTo = 'None';
              }
              break;
            }
            evolutionData = evolutionData.evolves_to.length > 0 ? evolutionData.evolves_to[0] : null;
          }
        });
      }
    });
=======
        this.isFavorite = this.favoriteService.isFavorite(this.pokemon);
      });
    }
>>>>>>> 4618967c169ccd752e3f116c97f8ac331d2cc9a7
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteService.toggleFavorite(this.pokemon);
  }

  capitalizeFirstLetter(name: string | undefined): string {
    if (!name) {
      return '';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
