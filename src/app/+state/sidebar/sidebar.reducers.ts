import { createReducer, on } from '@ngrx/store';
import { SidebarState } from './sidebar.interfaces';
import { sidebarActions } from './sidebar.actions';

export const initialState: SidebarState = {
  isOpen: false,
  isClosed: true,
};

export const sidebarReducer = createReducer(
  initialState,
  on(sidebarActions.toggleSidebar, (state, action) => ({
    ...state,
    isOpen: action.sidebarState.isOpen ?? state.isOpen,
    isClosed: action.sidebarState.isClosed ?? state.isClosed,
  }))
);
