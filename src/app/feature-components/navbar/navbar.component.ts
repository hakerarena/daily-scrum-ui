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

  constructor(private sidebarService: SidebarService) {
    this.username = localStorage.getItem('email') || 'User';
  }

  openUpdateStatus() {
    this.sidebarService.openSidebar();
  }

  logout() {
    localStorage.clear();
    alert('Logged out successfully!');
    window.location.reload();
  }
}
