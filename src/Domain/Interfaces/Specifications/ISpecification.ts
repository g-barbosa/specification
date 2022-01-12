interface ISpecification<T> {
  isSatisfiedBy(candidate: T): boolean
  and(specification: ISpecification<T>): ISpecification<T>
  or(specification: ISpecification<T>): ISpecification<T>
}