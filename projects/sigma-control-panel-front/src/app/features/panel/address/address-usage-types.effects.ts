import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import { State } from '../panel.state';
import { actionAddressUsageTypesDeleteOne, actionAddressUsageTypesUpsertOne } from './address-usage-types.actions';
import { selectAddressUsageTypes } from './address-usage-types.selectors';

export const ADDRESS_USAGE_TYPES_KEY = 'panel.ADDRESS_USAGE_TYPES';

@Injectable()
export class AddressUsageTypesEffects {
  persistAddressUsageTypes = createEffect(
    () =>
    this.actions$.pipe(
      ofType(actionAddressUsageTypesUpsertOne, actionAddressUsageTypesDeleteOne),
      withLatestFrom(this.store.pipe(select(selectAddressUsageTypes))),
      tap(([actions, addressUsageTypesState]) =>
      this.localStorageService.setItem(ADDRESS_USAGE_TYPES_KEY, addressUsageTypesState))
    ),
    { dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
  ) {}
}
