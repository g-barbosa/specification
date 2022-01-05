import Pokemon, { PokemonTypeEnum } from './Domain/Entities/Pokemon';

let pokemons: Pokemon[] = [];

pokemons.push(new Pokemon('Bulbasaur', PokemonTypeEnum.Grass));
pokemons.push(new Pokemon('Charmander', PokemonTypeEnum.Fire));
pokemons.push(new Pokemon('Squirtle', PokemonTypeEnum.Water));

const fireTypeSpec = new Pokemon.Filters.Type(PokemonTypeEnum.Fire)

pokemons.forEach(poke => {
  if (fireTypeSpec.is(poke)) {
    console.log('yeah! Your pokemon is a Fire-type Pokemon!')
  } else {
    console.log('ooh! Your pokemon is not a Fire-type pokemon!')
  }
})
