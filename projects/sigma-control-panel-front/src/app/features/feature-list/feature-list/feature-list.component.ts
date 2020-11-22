import { v4 as uuid } from 'uuid';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../feature-list.data';
import { State } from '../feature.module.state';
import { Feature as FeatureModel } from '../feature.model';
import { actionFeatureUpsertOne, actionFeatureDeleteOne } from '../feature.actions';
import { selectSelectedFeature, selectAllFeatures } from '../feature.selectors';


@Component({
  selector: 'sigma-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  featuresFormGroup = this.fb.group(FeatureListComponent.createFeatur());
  features$: Observable<FeatureModel[]> = this.store.pipe(select(selectAllFeatures));
  selectedFeature$: Observable<FeatureModel> = this.store.pipe(select(selectSelectedFeature));

  isEditing: boolean;

  constructor(
    public store: Store<State>,
    public fb: FormBuilder,
    private router: Router
  ) {}

  static createFeatur(): FeatureModel {
    return {
      id: uuid(),
      title: '',
      description: '',
      documentation: ''
    }
  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  select(feature: FeatureModel): void {
    this.isEditing = false;
    this.router.navigate(['feature-list']);
  }


  deselect(): void {
    this.isEditing = false;
    this.router.navigate(['feature-list']);
  }

  edit(feature: FeatureModel): void {
    this.isEditing = true;
    this.featuresFormGroup.setValue(feature);
  }

  addNew(): void {
    this.featuresFormGroup.reset();
    this.featuresFormGroup.setValue(FeatureListComponent.createFeatur());
    this.isEditing = true;
  }

  cancelEditting(): void {
    this.isEditing = false;
  }

  delete(feature: FeatureModel): void {
    this.store.dispatch(actionFeatureDeleteOne({ id: feature.id}));
    this.isEditing = false;
    this.router.navigate(['feature-list']);
  }

  save(): void {
    if (this.featuresFormGroup.valid) {
      const feature = this.featuresFormGroup.value;
      this.store.dispatch(actionFeatureUpsertOne({ feature }));
      this.isEditing = false;
      this.router.navigate(['feature-list']);
    }
  }
}
