import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScrumState } from '../shared/interfaces';

export const scrumState = createFeatureSelector<ScrumState>('scrum');

export const sidebarState = createSelector(
  scrumState,
  (state) => state.sidebarState
);
