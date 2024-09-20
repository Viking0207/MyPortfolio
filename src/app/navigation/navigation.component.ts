import { Component, HostListener } from '@angular/core';

import { Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  openSection: string | null = null;

  toggleSection(section: string) {
    if (this.openSection === section) {
      this.openSection = null;
      console.log(`${section} section has fail`);
    } else {
      this.openSection = section;
      console.log(`${section} section has success`);
    }
  }

  @HostListener('document:click', ['$event'])
  closeDetailsEvent(e: Event) {
    const targetElement = e.target as HTMLElement;
    const isClickInside = targetElement.closest('details');

    if (!isClickInside) {
      this.openSection = null;
    }
  }

  isDarkMode: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    // Ambil preferensi mode dari localStorage
    const darkModePreference = localStorage.getItem('darkMode');

    // Jika ada preferensi di localStorage, gunakan itu
    // Jika tidak ada, cek preferensi sistem (browser)
    if (darkModePreference) {
      this.isDarkMode = darkModePreference === 'true';
    } else {
      // Cek preferensi sistem menggunakan media query
      this.isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }

    // Terapkan mode yang sesuai
    this.applyTheme();
  }

  toggleDarkMode() {
    // Ubah antara light dan dark mode
    this.isDarkMode = !this.isDarkMode;

    // Simpan preferensi ke localStorage
    localStorage.setItem('darkMode', this.isDarkMode.toString());

    // Terapkan perubahan tema
    this.applyTheme();
  }

  applyTheme() {
    // Ubah 'data-theme' di elemen <html> sesuai mode yang dipilih
    if (this.isDarkMode) {
      this.renderer.setAttribute(
        document.documentElement,
        'data-theme',
        'dark'
      );
      this.renderer.removeClass(document.body, 'dark');
    } else {
      this.renderer.setAttribute(
        document.documentElement,
        'data-theme',
        'light'
      );
      this.renderer.addClass(document.body, 'dark');
    }
  }
}
