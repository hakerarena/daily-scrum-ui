import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false
})
export class SidebarComponent {
  updateStatusForm: FormGroup;
  isOpen: boolean = false;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService) {
    this.updateStatusForm = this.fb.group({
      yesterday: ['', [Validators.required, Validators.minLength(5)]],
      today: ['', [Validators.required, Validators.minLength(5)]],
      onCall: ['', Validators.required],
      impediments: ['', Validators.required],
      followUps: ['', Validators.required]
    });

    // Listen to service to open the sidebar
    this.sidebarService.sidebarState.subscribe(isOpen => this.isOpen = isOpen);
  }

  // ✅ Auto resize textarea dynamically based on input
  autoResize(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  // ✅ Submit Form
  submitStatus() {
    if (this.updateStatusForm.invalid) {
      return;
    }

    console.log('Form Data:', this.updateStatusForm.value);
    alert('Status updated successfully!');
    this.updateStatusForm.reset();
    this.closeSidebar();
  }

  // ✅ Close Sidebar
  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

  // ✅ Get form controls
  get f() {
    return this.updateStatusForm.controls;
  }
}
