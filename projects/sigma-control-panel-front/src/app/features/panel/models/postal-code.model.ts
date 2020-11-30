import { EntityState } from '@ngrx/entity';

export interface PostalCode {
  code: string,
}

// For extending the PostalCodeState Interface, we could always use
// export interface PostalCodeState extends EntityState<PostalCode> {}
export type PostalCodeType = EntityState<PostalCode>;
