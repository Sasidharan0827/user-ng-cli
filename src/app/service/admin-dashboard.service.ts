import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { AdminDashboardData } from '../models/dashboard.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  constructor(private readonly apiService: ApiService) {}

  getDashboard(): Observable<AdminDashboardData> {
    if (this.apiService.isMockMode()) {
      return of(this.getMockDashboard()).pipe(delay(150));
    }

    return this.apiService.get<AdminDashboardData>('/admin-dashboard');
  }

  private getMockDashboard(): AdminDashboardData {
    return {
      prizePool: {
        label: 'Total Prize Pool',
        value: '$428,190',
        accent: 'cyan',
        detail: '+12.5% this month'
      },
      charityImpact: {
        label: 'Charity Impact',
        value: '$84,022',
        accent: 'violet',
        detail: '8 charities supported'
      },
      activeHeroes: {
        label: 'Growth Kinetic',
        value: '12,840',
        accent: 'slate',
        detail: 'Active heroes'
      },
      sampleSize: 4209,
      estimatedOdds: '1 : 4,209',
      ticketsInSystem: 184902,
      nextDrawCountdown: '14:02:59',
      phases: [
        { label: 'Subscription Tier Weighting', complete: true },
        { label: 'Loyalty Multiplier [x1.5 Max]', complete: true },
        { label: 'Entropy Injection Point', complete: false }
      ],
      heroes: [
        {
          id: 'DH-7729',
          name: 'Marcus Thorne',
          tier: 'Platinum',
          status: 'Active',
          impactScore: 2440,
          avatar: 'MT'
        },
        {
          id: 'DH-1104',
          name: 'Sarah Jenkins',
          tier: 'Standard',
          status: 'Active',
          impactScore: 940,
          avatar: 'SJ'
        },
        {
          id: 'DH-9021',
          name: 'Alex Rivera',
          tier: 'Legendary',
          status: 'On Hold',
          impactScore: 11200,
          avatar: 'AR'
        }
      ],
      winners: [
        {
          id: 'W-001',
          name: 'Elias Vance',
          prize: '$5,000 Major Draw',
          avatarTone: 'sepia'
        },
        {
          id: 'W-002',
          name: 'Janice K.',
          prize: '$250 Charity Boost',
          avatarTone: 'mono'
        }
      ]
    };
  }
}
