import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListRoutingModule } from './feature-list-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FeatureEffects } from './feature.effects';
import { FeatureModuleEffects } from './feature.module.effects';
import { StoreModule } from '@ngrx/store';

import { FEATURE_NAME, reducers } from './feature.module.state';

export function httpLoaderFactory(http: HttpClient):  TranslateHttpLoader{
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/feature/`,
    '.json'
  );
}

@NgModule({
  declarations: [FeatureListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureListRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([FeatureEffects, FeatureModuleEffects]),
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ]
})
export class FeatureListModule {}
