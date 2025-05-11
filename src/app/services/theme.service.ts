import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor() {}

  setTheme(theme: 'dark' | 'light') {
    this.currentTheme = theme;
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  getTheme(): 'dark' | 'light' {
    return this.currentTheme;
  }
}
