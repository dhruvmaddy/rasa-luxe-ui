import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;
  searchQuery = '';

  menuItems = [
    { label: 'Mould Candle', icon: '🕯️' },
    { label: 'Pillar Candle', icon: '🔥' },
    { label: 'Jar Candle', icon: '🏺' },
    { label: 'Wax Sachet', icon: '🌸' },
    { label: 'Wax Pearl', icon: '💎' },
    { label: 'Tealight Candle', icon: '✨' },
    { label: 'Candle Bouquet', icon: '💐' },
    { label: 'Hamper Box', icon: '🎁' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      // Focus the search input after it appears
      setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
          searchInput.focus();
        }
      }, 0);
    }
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchQuery = '';
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Add your search logic here
    }
  }
}
