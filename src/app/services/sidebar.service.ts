import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarStateSource = new BehaviorSubject<boolean>(false);
  sidebarState = this.sidebarStateSource.asObservable();

  openSidebar() {
    this.sidebarStateSource.next(true);
  }

  closeSidebar() {
    this.sidebarStateSource.next(false);
  }
}
