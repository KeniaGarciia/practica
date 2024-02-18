export interface PokemonResponse {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
  }

  export interface Result {
    name: string;
    url: string;
  }


  export interface PokemonOneResponse {
    abilities: Ability2[];
    base_experience: number;
    cries: Cries;
    forms: Ability[];
    game_indices: Gameindex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move;
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Ability;
    sprites: Sprites;
    stats: Stat;
    types: Type;
    weight: number;
  }

  export interface Type {
    slot: number;
    type: Ability;
  }

  export interface Stat {
    base_stat: number;
    effort: number;
    stat: Ability;
  }

  export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
  }


  export interface Other {
    dream_world: Dreamworld;
    home: Home;
    ["official-artwork"]: Officialartwork;
    showdown: Showdown;
  }

  export interface Showdown {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
  }

  export interface Officialartwork {
    front_default: string;
    front_shiny: string;
  }

  export interface Home {
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
  }

  export interface Dreamworld {
    front_default: string;
    front_female?: any;
  }

  export interface Move {
    move: Ability;
    version_group_details: Versiongroupdetail[];
  }

  export interface Versiongroupdetail {
    level_learned_at: number;
    move_learn_method: Ability;
    version_group: Ability;
  }

  export interface Gameindex {
    game_index: number;
    version: Ability;
  }

  export interface Cries {
    latest: string;
    legacy: string;
  }

  export interface Ability2 {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }

  export interface Ability {
    name: string;
    url: string;
  }
