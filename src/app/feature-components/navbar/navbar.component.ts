import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent {
  username: string = '';
  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.username = localStorage.getItem('email') || 'User';
    this.sidebarService.sidebarState.subscribe(isSidebarOpen => this.isSidebarOpen = isSidebarOpen);
  }

  openUpdateStatus() {
    this.isSidebarOpen ? this.sidebarService.closeSidebar(): this.sidebarService.openSidebar();
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  logout() {
    localStorage.clear();
    alert('Logged out successfully!');
    window.location.reload();
  }
}
