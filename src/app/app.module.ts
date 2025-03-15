import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './feature-components/login/login.component';
import { DashboardComponent } from './feature-components/dashboard/dashboard.component';
import { NavbarComponent } from './feature-components/navbar/navbar.component';
import { SidebarComponent } from './feature-components/sidebar/sidebar.component';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataAccessModule } from './+state/data-access.module';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataAccessModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
