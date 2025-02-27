import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = true;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
