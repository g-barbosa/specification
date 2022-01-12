import { BaseSpecification } from './BaseSpecification'

export class AndSpecification<T> extends BaseSpecification<T> {
  constructor(public specificationOne: ISpecification<T>, public specificationTwo: ISpecification<T>) {
    super();
  }

  public override isSatisfiedBy(candidate: T): boolean {
      return this.specificationOne.isSatisfiedBy(candidate) && this.specificationTwo.isSatisfiedBy(candidate);
  }
}
