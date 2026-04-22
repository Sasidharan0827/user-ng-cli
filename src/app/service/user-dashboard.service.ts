import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreEntry, UserDashboardState } from '../models/content.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  constructor(private readonly apiService: ApiService) {}

  getDashboard(): Observable<UserDashboardState> {
    return this.apiService.get<UserDashboardState>('/user-dashboard');
  }

  updatePreferences(selectedCharity: string, contributionRate: number): Observable<{ message: string; selectedCharity: string; contributionRate: number }> {
    return this.apiService.patch<{ message: string; selectedCharity: string; contributionRate: number }>(
      '/user-dashboard/preferences',
      { selectedCharity, contributionRate }
    );
  }

  createScore(date: string, score: number): Observable<{ message: string; scores: ScoreEntry[] }> {
    return this.apiService.post<{ message: string; scores: ScoreEntry[] }>('/user-dashboard/scores', { date, score });
  }

  updateScore(id: number, date: string, score: number): Observable<{ message: string; scores: ScoreEntry[] }> {
    return this.apiService.put<{ message: string; scores: ScoreEntry[] }>(`/user-dashboard/scores/${id}`, { date, score });
  }

  deleteScore(id: number): Observable<{ message: string; scores: ScoreEntry[] }> {
    return this.apiService.delete<{ message: string; scores: ScoreEntry[] }>(`/user-dashboard/scores/${id}`);
  }
}
