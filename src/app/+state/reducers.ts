import { ActionReducerMap } from '@ngrx/store';
import { ScrumState } from '../shared/interfaces';
import { sidebarReducer } from './sidebar/sidebar.reducers';

export const reducers: ActionReducerMap<ScrumState> = {
  sidebarState: sidebarReducer,
};
