import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, filter, takeUntil } from 'rxjs';
import * as AOS from 'aos';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'user-ng-cli';
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly spinner: NgxSpinnerService,
    private readonly themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.theme);

    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic'
    });

    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          void this.spinner.show();
        }

        if (event instanceof NavigationEnd || event instanceof NavigationError) {
          setTimeout(() => {
            void this.spinner.hide();
            AOS.refreshHard();
          }, 300);
        }
      });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => AOS.refreshHard());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
