import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppTheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'fds-app-theme';
  private readonly themeSubject = new BehaviorSubject<AppTheme>('dark');

  readonly theme$ = this.themeSubject.asObservable();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    const savedTheme = this.readSavedTheme();
    this.setTheme(savedTheme);
  }

  get theme(): AppTheme {
    return this.themeSubject.value;
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: AppTheme): void {
    this.themeSubject.next(theme);
    this.document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  private readSavedTheme(): AppTheme {
    const savedTheme = localStorage.getItem(this.storageKey);
    return savedTheme === 'light' ? 'light' : 'dark';
  }
}
