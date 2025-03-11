import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent {
  username: string = '';

  constructor(private router: Router) {
    this.username = localStorage.getItem('username') || 'User';
  }

  openUpdateStatus() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.classList.add('open');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  closeSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.classList.remove('open');
  }
}
