import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { StoreModule } from '@ngrx/store';
import { DetailsReducer } from './state/details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailsEffects } from './state/details.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    DetailsPage, 
    DailyWeatherComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
    StoreModule.forFeature('details', DetailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    ComponentsModule,
  ],
  providers: [DetailsGuard],
})
export class DetailsModule {}
