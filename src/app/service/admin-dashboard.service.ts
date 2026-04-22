import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminDashboardState } from '../models/content.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  constructor(private readonly apiService: ApiService) {}

  getDashboard(): Observable<AdminDashboardState> {
    return this.apiService.get<AdminDashboardState>('/admin-dashboard');
  }

  updateSampleSize(sampleSize: number): Observable<AdminDashboardState> {
    return this.apiService.patch<AdminDashboardState>('/admin-dashboard/sample-size', { sampleSize });
  }

  runSimulation(algorithmMode: 'Algorithmic' | 'Random', sampleSize: number): Observable<AdminDashboardState> {
    return this.apiService.post<AdminDashboardState>('/admin-dashboard/simulation', { algorithmMode, sampleSize });
  }

  executeDraw(): Observable<AdminDashboardState> {
    return this.apiService.post<AdminDashboardState>('/admin-dashboard/execute-draw', {});
  }

  cycleSubscription(id: string): Observable<AdminDashboardState> {
    return this.apiService.patch<AdminDashboardState>(`/admin-dashboard/users/${id}/subscription`, {});
  }

  cycleWinnerState(id: string): Observable<AdminDashboardState> {
    return this.apiService.patch<AdminDashboardState>(`/admin-dashboard/winners/${id}/state`, {});
  }
}
