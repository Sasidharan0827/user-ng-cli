import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRightToBracket,
  faBolt,
  faGaugeHigh,
  faMoon,
  faShieldHalved,
  faSun,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../service/theme.service';

interface AdminNavItem {
  label: string;
  route: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  readonly faBolt = faBolt;
  readonly faMoon = faMoon;
  readonly faSun = faSun;
  readonly currentTheme$ = this.themeService.theme$;

  readonly navItems: AdminNavItem[] = [
    { label: 'Admin Overview', route: '/admin', icon: faGaugeHigh },
    { label: 'Winner Flow', route: '/winners', icon: faTrophy }
  ];

  readonly quickLinks = [
    { label: 'Login Portal', route: '/login', icon: faArrowRightToBracket },
    { label: 'Public Site', route: '/', icon: faShieldHalved }
  ];

  constructor(private readonly themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
