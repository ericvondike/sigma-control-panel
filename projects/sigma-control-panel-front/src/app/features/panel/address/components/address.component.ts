import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { State } from '../../panel.state';
import {  AddressUsageType } from '../../models/address-usage-type.model';
import { actionAddressUsageTypesDeleteOne, actionAddressUsageTypesUpsertOne } from '../address-usage-types.actions';
import { selectSelectedAddressUsageType, selectAllAddressUsageTypes } from '../address-usage-types.selectors';

@Component({
  selector: 'sigma-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  addressUsageTypeFormGroup = this.fb.group(AddressComponent.createAddressUsageType());
  addressUsageTypes$: Observable<AddressUsageType[]> = this.store.pipe(select(selectAllAddressUsageTypes));
  selectedAddressUsageType$: Observable<AddressUsageType> = this.store.pipe(select(selectSelectedAddressUsageType));

  isEditing: boolean;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private router: Router,
  ) { }



  static createAddressUsageType(): AddressUsageType {
    return {
      id: uuid(),
      code: '',
      label: '',
      description: ''
    };
  }

  select(addressUsageType: AddressUsageType) {
    this.isEditing = false;
    this.router.navigate(['panel/address', addressUsageType.id]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(['panel/address']);
  }

  edit(addressUsageType: AddressUsageType) {
    this.isEditing = true;
    this.addressUsageTypeFormGroup.setValue(addressUsageType);
  }

  addNew() {
    this.addressUsageTypeFormGroup.reset();
    this.addressUsageTypeFormGroup.setValue(AddressComponent.createAddressUsageType());
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete(addressUsageType: AddressUsageType) {
    this.store.dispatch(actionAddressUsageTypesDeleteOne({id : addressUsageType.id}));
    this.isEditing = false;
    this.router.navigate(['panel/address']);
  }

  save() {
    if (this.addressUsageTypeFormGroup.valid) {
      const addressUsageType = this.addressUsageTypeFormGroup.value;
      this.store.dispatch(actionAddressUsageTypesUpsertOne({ addressUsageType }));
      this.isEditing = false;
      this.router.navigate(['panel/address', addressUsageType.id])
    }
  }
}
