import { Component, OnInit } from '@angular/core';
import { AdminDashboardState, AdminUser, ManagedWinner } from '../../models/content.model';
import { AdminDashboardService } from '../../service/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  data: AdminDashboardState = {
    algorithmMode: 'Algorithmic',
    sampleSize: 4209,
    nextDrawCountdown: '',
    drawStatus: '',
    ticketsInSystem: 0,
    metrics: {
      prizePool: { label: '', value: '', accent: 'cyan', detail: '' },
      charityImpact: { label: '', value: '', accent: 'violet', detail: '' },
      activeHeroes: { label: '', value: '', accent: 'slate', detail: '' }
    },
    phases: [],
    users: [],
    winners: [],
    charities: []
  };

  filterTerm = '';

  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  ngOnInit(): void {
    this.adminDashboardService.getDashboard().subscribe((dashboard) => {
      this.data = dashboard;
    });
  }

  get filteredUsers(): AdminUser[] {
    const term = this.filterTerm.trim().toLowerCase();
    if (!term) {
      return this.data.users;
    }

    return this.data.users.filter((user) =>
      `${user.name} ${user.id} ${user.plan} ${user.subscription} ${user.charity}`.toLowerCase().includes(term)
    );
  }

  get activeUserCount(): number {
    return this.data.users.filter((user) => user.subscription === 'Active').length;
  }

  updateSampleSize(event: Event): void {
    const sampleSize = Number((event.target as HTMLInputElement).value);
    this.adminDashboardService.updateSampleSize(sampleSize).subscribe((dashboard) => {
      this.data = dashboard;
    });
  }

  runSimulation(): void {
    this.adminDashboardService.runSimulation(this.data.algorithmMode, this.data.sampleSize).subscribe((dashboard) => {
      this.data = dashboard;
    });
  }

  executeDraw(): void {
    this.adminDashboardService.executeDraw().subscribe((dashboard) => {
      this.data = dashboard;
    });
  }

  cycleSubscription(user: AdminUser): void {
    this.adminDashboardService.cycleSubscription(user.id).subscribe((dashboard) => {
      this.data = dashboard;
    });
  }

  cycleWinnerState(winner: ManagedWinner): void {
    this.adminDashboardService.cycleWinnerState(winner.id).subscribe((dashboard) => {
      this.data = dashboard;
    });
  }
}
