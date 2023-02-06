import { createReducer, Action, on } from '@ngrx/store';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from './home.actions';

export interface HomeState {
  entity: CityWeather;
  loading: boolean;
  error: boolean;
}

export const homeInitialState: HomeState = {
  entity: undefined,
  loading: false,
  error: false,
};

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.loadCurrentWeather, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(fromHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    error: true,
  }))
);

export function homeReducer(
  state: HomeState | undefined,
  action: Action
): HomeState {
  return reducer(state, action);
}
