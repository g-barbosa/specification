import { BaseSpecification } from './BaseSpecification'

export class OrSpecification<T> extends BaseSpecification<T> {
  constructor(public specificationOne: ISpecification<T>, public specificationTwo: ISpecification<T>) {
    super();
    this.specificationOne = specificationOne;
    this.specificationTwo = specificationTwo;
  }

  public override is(candidate: T): boolean {
      return this.specificationOne.is(candidate) || this.specificationTwo.is(candidate);
  }
}
