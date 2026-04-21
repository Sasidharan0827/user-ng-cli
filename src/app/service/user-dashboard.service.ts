import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { UserDashboardData } from '../models/dashboard.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  constructor(private readonly apiService: ApiService) {}

  getDashboard(): Observable<UserDashboardData> {
    if (this.apiService.isMockMode()) {
      return of(this.getMockDashboard()).pipe(delay(150));
    }

    return this.apiService.get<UserDashboardData>('/user-dashboard');
  }

  private getMockDashboard(): UserDashboardData {
    return {
      heading: 'Stableford Trajectory',
      averageScore: 38.4,
      impactTitle: 'Charity Nexus',
      activeSelection: 'Ocean Vanguard AI',
      contributionRate: 12.5,
      nextDraw: 'St Andrews Open',
      nextDrawIn: '4D 12H',
      pastWinnings: 'Augusta Series',
      currentPlan: 'Elite Subscriber',
      renewalDate: '24 Jan 2025',
      performance: [
        { label: '12 Oct', shortDate: '12 OCT', score: 39 },
        { label: '05 Oct', shortDate: '05 OCT', score: 36 },
        { label: '28 Sep', shortDate: '28 SEP', score: 42 },
        { label: '21 Sep', shortDate: '21 SEP', score: 33 },
        { label: '14 Sep', shortDate: '14 SEP', score: 44 }
      ],
      missionHistory: [
        {
          score: 39,
          course: 'Wentworth Estate - South Course',
          event: 'Stableford Single Round',
          date: '12 Oct 2024',
          impact: 4.2,
          status: 'Confirmed'
        },
        {
          score: 36,
          course: 'The Belfry - Brabazon',
          event: 'Vanguard Tournament',
          date: '05 Oct 2024',
          impact: 3.5,
          status: 'Confirmed'
        },
        {
          score: 42,
          course: 'Sunningdale - Old Course',
          event: 'Stableford Single Round',
          date: '28 Sep 2024',
          impact: 6.1,
          status: 'Confirmed'
        }
      ]
    };
  }
}
