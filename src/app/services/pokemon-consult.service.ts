import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { PokemonResponse, PokemonOneResponse } from './pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonConsultService {

  constructor( private http: HttpClient) { }
  private url: string = environment.url;
    getList(): Observable<PokemonResponse>{
      return this.http.get<PokemonResponse>(`${this.url}pokemon/?offset=0&limit=150`);
    }

    getPokemon(id: string): Observable<PokemonOneResponse>{
      return this.http.get<PokemonOneResponse>(`${this.url}pokemon/${id}`);
    }

}
