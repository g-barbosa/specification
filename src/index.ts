import Pokemon from './Domain/Entities/Pokemon';
import { PokemonTypeEnum } from './Domain/Entities/PokemonTypeEnum';

let pokemons: Pokemon[] = [];

pokemons.push(new Pokemon('Bulbasaur', PokemonTypeEnum.Grass));
pokemons.push(new Pokemon('Charmander', PokemonTypeEnum.Fire));
pokemons.push(new Pokemon('Squirtle', PokemonTypeEnum.Water));


//Tipos de combinações
const fireOrWaterTypeSpec = new Pokemon.Filters.Type(PokemonTypeEnum.Fire).or(new Pokemon.Filters.Type(PokemonTypeEnum.Water))
const fireTypeSpec = new Pokemon.Filters.Type(PokemonTypeEnum.Fire)
const fireAndGrassTypeSpec = new Pokemon.Filters.Type(PokemonTypeEnum.Fire).and(new Pokemon.Filters.Type(PokemonTypeEnum.Grass))

pokemons.forEach(poke => {
  if (fireOrWaterTypeSpec.isSatisfiedBy(poke)) {
    console.log('yeah! Your pokemon is a Fire-type or Water-type Pokemon!')
  } else {
    console.log('ooh! Your pokemon is not a Fire-type pokemon!')
  }
})
