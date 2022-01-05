import { BaseSpecification } from './BaseSpecification'

export class AndSpecification<T> extends BaseSpecification<T> {
  constructor(public specificationOne: ISpecification<T>, public specificationTwo: ISpecification<T>) {
    super();
  }

  public override is(candidate: T): boolean {
      return this.specificationOne.is(candidate) && this.specificationTwo.is(candidate);
  }
}
