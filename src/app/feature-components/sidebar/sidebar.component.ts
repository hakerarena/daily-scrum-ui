import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false
})
export class SidebarComponent {
  isOpen: boolean = false;

  closeSidebar() {
    this.isOpen = false;
  }

  submitForm() {
    alert('Status Submitted Successfully');
    this.closeSidebar();
  }
}
