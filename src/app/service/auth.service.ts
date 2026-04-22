import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginOptions } from '../models/content.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly apiService: ApiService) {}

  getOptions(): Observable<LoginOptions> {
    return this.apiService.get<LoginOptions>('/login-options');
  }

  login(mode: 'user' | 'admin', email: string, password: string): Observable<{ success: boolean; route?: string; message?: string }> {
    return this.apiService.post<{ success: boolean; route?: string; message?: string }>('/login', { mode, email, password });
  }
}
