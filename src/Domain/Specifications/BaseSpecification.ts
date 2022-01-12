export abstract class BaseSpecification<T> implements ISpecification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(specification: ISpecification<T>): ISpecification<T> {
    return new AndSpecification<T>(this, specification);
  }

  or(specification: ISpecification<T>): ISpecification<T> {
    return new OrSpecification<T>(this, specification);
  }

}

import { AndSpecification } from './AndSpecification';
import { OrSpecification } from './OrSpecification';