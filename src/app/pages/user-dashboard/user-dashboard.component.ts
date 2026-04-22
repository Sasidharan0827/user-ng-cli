import { Component, OnInit } from '@angular/core';
import { ScoreEntry, UserDashboardState, UserSubscription } from '../../models/content.model';
import { UserDashboardService } from '../../service/user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  subscription: UserSubscription = {
    status: '',
    plan: '',
    renewalDate: '',
    nextDraw: '',
    drawsEntered: 0,
    totalWon: '',
    paymentState: ''
  };

  charities: string[] = [];
  selectedCharity = '';
  contributionRate = 10;

  scores: ScoreEntry[] = [];

  scoreForm = {
    date: '',
    score: 36
  };

  editingId: number | null = null;
  formMessage = 'Add a score between 1 and 45. Only one entry is allowed per date.';

  constructor(private readonly userDashboardService: UserDashboardService) {}

  ngOnInit(): void {
    this.userDashboardService.getDashboard().subscribe((dashboard) => {
      this.applyDashboard(dashboard);
    });
  }

  get sortedScores(): ScoreEntry[] {
    return [...this.scores].sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
  }

  get averageScore(): string {
    if (this.scores.length === 0) {
      return '0.0';
    }

    const total = this.scores.reduce((sum, item) => sum + item.score, 0);
    return (total / this.scores.length).toFixed(1);
  }

  get maxScore(): number {
    return Math.max(...this.scores.map((item) => item.score), 1);
  }

  getBarHeight(score: number): number {
    return Math.max(36, Math.round((score / this.maxScore) * 100));
  }

  savePreferences(): void {
    this.userDashboardService.updatePreferences(this.selectedCharity, this.contributionRate).subscribe((response) => {
      this.selectedCharity = response.selectedCharity;
      this.contributionRate = response.contributionRate;
      this.formMessage = response.message;
    });
  }

  saveScore(): void {
    const trimmedDate = this.scoreForm.date.trim();
    const duplicate = this.scores.some((entry) => entry.date === trimmedDate && entry.id !== this.editingId);

    if (!trimmedDate) {
      this.formMessage = 'Choose a score date before saving.';
      return;
    }

    if (this.scoreForm.score < 1 || this.scoreForm.score > 45) {
      this.formMessage = 'Stableford score must be between 1 and 45.';
      return;
    }

    if (duplicate) {
      this.formMessage = 'Duplicate dates are not allowed. Edit or delete the existing score for that date.';
      return;
    }

    if (this.editingId !== null) {
      this.userDashboardService.updateScore(this.editingId, trimmedDate, this.scoreForm.score).subscribe((response) => {
        this.scores = response.scores;
        this.formMessage = response.message;
        this.cancelEdit();
      });
      return;
    }

    this.userDashboardService.createScore(trimmedDate, this.scoreForm.score).subscribe((response) => {
      this.scores = response.scores;
      this.formMessage = response.message;
      this.cancelEdit();
    });
  }

  startEdit(entry: ScoreEntry): void {
    this.editingId = entry.id;
    this.scoreForm = { date: entry.date, score: entry.score };
    this.formMessage = `Editing score from ${this.formatDate(entry.date)}.`;
  }

  deleteScore(entryId: number): void {
    this.userDashboardService.deleteScore(entryId).subscribe((response) => {
      this.scores = response.scores;
      this.cancelEdit();
      this.formMessage = response.message;
    });
  }

  cancelEdit(): void {
    this.editingId = null;
    this.scoreForm = { date: '', score: 36 };
  }

  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private applyDashboard(dashboard: UserDashboardState): void {
    this.subscription = dashboard.subscription;
    this.charities = dashboard.charities;
    this.selectedCharity = dashboard.selectedCharity;
    this.contributionRate = dashboard.contributionRate;
    this.scores = dashboard.scores;
  }
}
