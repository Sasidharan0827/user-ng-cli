import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRightFromBracket,
  faBuildingUser,
  faCompass,
  faMoon,
  faStar,
  faSun,
  faTicket,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../service/theme.service';

interface UserNavItem {
  label: string;
  route: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
  readonly faMoon = faMoon;
  readonly faSun = faSun;
  readonly faStar = faStar;
  readonly currentTheme$ = this.themeService.theme$;

  readonly navItems: UserNavItem[] = [
    { label: 'Overview', route: '/dashboard', icon: faCompass },
    { label: 'Charity Directory', route: '/charities', icon: faBuildingUser },
    { label: 'Draw Engine', route: '/draws', icon: faTicket }
  ];

  readonly subscription = {
    status: 'Active',
    plan: 'Yearly Plan'
  };

  readonly quickLinks = [
    { label: 'Login Portal', route: '/login', icon: faArrowRightFromBracket },
    { label: 'Admin Control', route: '/admin', icon: faUsers },
    { label: 'Public Landing', route: '/', icon: faStar }
  ];

  constructor(private readonly themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
