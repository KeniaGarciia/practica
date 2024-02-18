import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
  {
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'list',
      component: PokemonListComponent,
    },
    {
      path: ':id',
      component: PokemonDetailComponent,
    },
    {
      path: '**',
      redirectTo: 'list'
    }
  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
