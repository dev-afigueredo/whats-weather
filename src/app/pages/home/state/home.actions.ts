import { createAction, props } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';

export const loadCurrentWeather = createAction(
  '[Home] Load Current Weather',
  props<{ query: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Current Weather Success',
  props<{ entity: CityWeather }>(),
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load current Weather Failed',
);

export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{ entity: Bookmark }>(),
)
