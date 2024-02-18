import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
  ]
})
export class ModuleModule { }
