import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonConsultService } from '../../services/pokemon-consult.service';
import { switchMap } from 'rxjs';
import { PokemonOneResponse } from '../../services/pokemonResponse';
import Swal from'sweetalert2';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit  {

constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router,
  public servicio: PokemonConsultService,
){}
pokemon?: PokemonOneResponse;
img: string = '';
imgShyny: string = '';
moves: any;
name: string = ''
type: any;
abilities : any;
stats: any;
size: number = 0;
  ngOnInit(): void {
    Swal.fire({
      title: "Cargando...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.servicio.getPokemon( id )),
      )
      .subscribe( pokemon => {
        if ( !pokemon ) return this.router.navigate([ './pokemon/list' ]);
        this.pokemon = pokemon;
        this.img = pokemon.sprites.front_default;
        this.imgShyny = pokemon.sprites.front_shiny;
        this.name = pokemon.name;
        this.type = pokemon.types
        this.abilities = pokemon.abilities
        this.stats = pokemon.stats
        Swal.close();
        return;
      })
  }

  goBack() {
    this.router.navigate(['./pokemon/list']);
    }


}
