import { BaseSpecification } from '../Specifications/BaseSpecification';

export enum PokemonTypeEnum {
  Grass = 1,
  Fire = 2,
  Water = 3
}

export default class Pokemon {
  public readonly name: string;
  public readonly type: PokemonTypeEnum;
  constructor(name: string, type: PokemonTypeEnum) {
    this.name = name,
    this.type = type
  }

  public static Filters = class {

    static Type = class extends BaseSpecification<Pokemon> {
      constructor(private type: PokemonTypeEnum) { super(); }
      is(candidate: Pokemon): boolean {
        return candidate.type == this.type;
      }
    }
  }
}