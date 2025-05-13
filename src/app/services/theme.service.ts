import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<'dark' | 'light'>('dark');

  get theme() {
    return this._theme;
  }

  setTheme(theme: 'dark' | 'light') {
    this._theme.set(theme);
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }

  toggleTheme() {
    const next = this._theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }
}
