import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const html = document.documentElement;
    const body = document.body;

    if (this.isMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';

      window.addEventListener('scroll', this.preventScroll);
      window.addEventListener('touchmove', this.preventScroll, { passive: false });
    } else {
      html.style.overflow = '';
      body.style.position = '';
      body.style.width = '';

      window.removeEventListener('scroll', this.preventScroll);
      window.removeEventListener('touchmove', this.preventScroll);
    }
  }

  preventScroll(event: Event) {
    event.preventDefault();
  }

  closeMenuOnClickOutside(event: Event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerMenu = document.getElementById('burger-menu');
    
    if (mobileMenu && burgerMenu && !mobileMenu.contains(event.target as Node) && !burgerMenu.contains(event.target as Node)) {
      this.isMenuOpen = false;
      document.documentElement.style.overflow = ''; 
      document.body.style.position = ''; 
      document.body.style.width = '';
    }
  }
}
