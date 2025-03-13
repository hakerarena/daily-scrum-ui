import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('scrum', reducers)],
})
export class DataAccessModule {}
