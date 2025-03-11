import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent implements OnInit {
  username: string = '';
  isSidebarOpen = false;
  currentDate: Date = new Date();
  currentTime: string = '';

  constructor(private sidebarService: SidebarService) {
    this.username = localStorage.getItem('email') || 'User';
    this.sidebarService.sidebarState.subscribe(isSidebarOpen => this.isSidebarOpen = isSidebarOpen);
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentDate = now;
    this.currentTime = now.toLocaleTimeString();
  }

  openUpdateStatus() {
    this.isSidebarOpen ? this.sidebarService.closeSidebar() : this.sidebarService.openSidebar();
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
