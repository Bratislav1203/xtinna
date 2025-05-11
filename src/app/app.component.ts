import { Component } from '@angular/core';
import {ThemeService} from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xtinna';

  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('dark');
  }

}
