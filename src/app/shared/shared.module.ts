import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../feature-components/login/login.component';
import { DashboardComponent } from '../feature-components/dashboard/dashboard.component';
import { NavbarComponent } from '../feature-components/navbar/navbar.component';
import { SidebarComponent } from '../feature-components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
