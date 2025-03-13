import { createAction, createActionGroup, props } from '@ngrx/store';
import { SidebarState } from './sidebar.interfaces';

export const sidebarActions = createActionGroup({
  source: 'Sidebar Actions',
  events: {
    toggleSidebar: props<{ sidebarState: SidebarState }>(),
  },
});
