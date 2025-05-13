import {Component, computed} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logoPath = computed(() => {
    return this.themeService.theme() === 'dark'
      ? 'assets/logo-white.png'
      : 'assets/logo.png';
  });
  menuOpen = false;
  constructor(public themeService: ThemeService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
