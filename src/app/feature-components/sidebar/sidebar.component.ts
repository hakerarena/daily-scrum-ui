import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SidebarState } from '../../+state/sidebar/sidebar.interfaces';
import { Observable, Subscription } from 'rxjs';
import { ScrumState } from '../../shared/interfaces';
import { sidebarState } from '../../+state/selector';
import { sidebarActions } from '../../+state/sidebar/sidebar.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent implements OnInit {
  updateStatusForm: FormGroup;
  localSidebar: SidebarState = { isOpen: false, isClosed: true };

  subscriptions: Subscription[] = [];
  sidebarState$: Observable<SidebarState>;

  constructor(private fb: FormBuilder, private store: Store<ScrumState>) {
    this.updateStatusForm = this.fb.group({
      yesterday: ['', [Validators.required]],
      today: ['', [Validators.required]],
      onCall: ['', Validators.required],
      impediments: ['', Validators.required],
      followUps: ['', Validators.required],
    });

    this.sidebarState$ = this.store.select(sidebarState);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.sidebarState$.subscribe((sidebarState) => {
        this.localSidebar = sidebarState;
        if (this.localSidebar.isClosed) this.updateStatusForm.reset();
      })
    );
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  submitStatus() {
    if (this.updateStatusForm.invalid) {
      return;
    }

    console.log('Form Data:', this.updateStatusForm.value);
    alert('Status updated successfully!');
    this.updateStatusForm.reset();
    this.closeSidebar();
  }

  closeSidebar() {
    this.updateStatusForm.reset();
    this.updateStatusForm.markAsPristine();
    this.updateStatusForm.markAsUntouched();
    this.store.dispatch(
      sidebarActions.toggleSidebar({
        sidebarState: {
          isOpen: false,
          isClosed: true,
        },
      })
    );
  }

  get f() {
    return this.updateStatusForm.controls;
  }
}
