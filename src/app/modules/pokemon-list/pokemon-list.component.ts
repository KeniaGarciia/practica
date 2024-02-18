import { Component, OnInit } from '@angular/core';
import { PokemonConsultService } from '../../services/pokemon-consult.service';
import { PokemonResponse } from '../../services/pokemonResponse';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit  {
pokemons: any = [];
  constructor(
    public servicio: PokemonConsultService,
    ){}

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.servicio.getList().subscribe(
    (resp:PokemonResponse ) =>{
      this.pokemons = resp.results;
    },
    (error) => {
      console.log('ERROR',error);
     }
    )
  }

}
