import { Component, HostListener } from '@angular/core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faHome = faHome;
  faUser = faUser;
  isMenuOpen = true;
  isCollapsed = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 's') {
      event.preventDefault();
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
