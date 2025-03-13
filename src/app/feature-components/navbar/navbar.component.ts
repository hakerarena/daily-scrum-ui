import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SidebarState } from '../../+state/sidebar/sidebar.interfaces';
import { ScrumState } from '../../shared/interfaces';
import { Store } from '@ngrx/store';
import { sidebarState } from '../../+state/selector';
import { sidebarActions } from '../../+state/sidebar/sidebar.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent implements OnInit {
  username: string = '';
  currentDate = new Date();
  timeClass: string = 'sunrise';
  timeIconClass: string = 'sun';
  localSidebar: SidebarState = { isOpen: false, isClosed: true };

  subscriptions: Subscription[] = [];
  sidebarState$: Observable<SidebarState>;

  constructor(private store: Store<ScrumState>) {
    this.username = localStorage.getItem('email') || 'User';
    this.sidebarState$ = this.store.select(sidebarState);
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    this.subscriptions.push(
      this.sidebarState$.subscribe((sidebarState) => {
        this.localSidebar = sidebarState;
      })
    );
  }

  updateTime() {
    this.currentDate = new Date();
    const hour = this.currentDate.getHours();
    const minute = this.currentDate.getMinutes();
    const totalMinutes = hour * 60 + minute;

    if (totalMinutes >= 5 * 60 && totalMinutes < 12 * 60) {
      this.timeClass = 'sunrise';
      this.timeIconClass = 'sun';
    } else if (totalMinutes >= 12 * 60 && totalMinutes < 18 * 60) {
      this.timeClass = 'sunset';
      this.timeIconClass = 'sun';
    } else if (totalMinutes >= 18 * 60 && totalMinutes < 21 * 60) {
      this.timeClass = 'twilight';
      this.timeIconClass = 'moon';
    } else if (totalMinutes >= 21 * 60 || totalMinutes < 3 * 60) {
      this.timeClass = 'moonlight';
      this.timeIconClass = 'moon';
    } else {
      this.timeClass = 'deepnight';
      this.timeIconClass = 'moon';
    }
  }

  getIconTransform() {
    const hour = this.currentDate.getHours();
    const minute = this.currentDate.getMinutes();
    const totalMinutes = hour * 60 + minute;
    let rotation = 0;

    if (totalMinutes >= 5 * 60 && totalMinutes < 18 * 60) {
      rotation = ((totalMinutes - 5 * 60) / (13 * 60)) * 180;
    } else {
      if (totalMinutes >= 18 * 60) {
        rotation = ((totalMinutes - 18 * 60) / (11 * 60)) * 180 + 180;
      } else {
        rotation = ((totalMinutes + 6 * 60) / (11 * 60)) * 180 + 180;
      }
    }
    return `rotate(${rotation}deg)`;
  }

  toggleSidebar() {
    this.store.dispatch(
      sidebarActions.toggleSidebar({
        sidebarState: {
          isOpen: !this.localSidebar.isOpen,
          isClosed: !this.localSidebar.isClosed,
        },
      })
    );
  }

  logout() {
    localStorage.clear();
    alert('Logged out successfully!');
    window.location.reload();
  }
}
