import { Component } from '@angular/core';

interface ScoreEntry {
  id: number;
  date: string;
  score: number;
}

interface DashboardLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  readonly navItems: DashboardLink[] = [
    { label: 'Overview', route: '/dashboard', icon: 'OV' },
    { label: 'Charity Directory', route: '/charities', icon: 'CH' },
    { label: 'Draw Engine', route: '/draws', icon: 'DR' },
    { label: 'Winner Flow', route: '/winners', icon: 'WV' },
    { label: 'Admin View', route: '/admin', icon: 'AD' }
  ];

  readonly subscription = {
    status: 'Active',
    plan: 'Yearly Plan',
    renewalDate: '12 Mar 2027',
    nextDraw: '01 May 2026',
    drawsEntered: 11,
    totalWon: '$1,450',
    paymentState: 'Pending payout review'
  };

  readonly charities = ['Global Literacy Front', 'Kinetic Recovery', 'Verdant Initiative', 'Harbor Community Fund'];
  selectedCharity = this.charities[0];
  contributionRate = 12;

  scores: ScoreEntry[] = [
    { id: 1, date: '2026-04-18', score: 39 },
    { id: 2, date: '2026-04-12', score: 35 },
    { id: 3, date: '2026-04-03', score: 42 },
    { id: 4, date: '2026-03-27', score: 37 },
    { id: 5, date: '2026-03-18', score: 40 }
  ];

  scoreForm = {
    date: '',
    score: 36
  };

  editingId: number | null = null;
  formMessage = 'Add a score between 1 and 45. Only one entry is allowed per date.';

  get sortedScores(): ScoreEntry[] {
    return [...this.scores].sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
  }

  get averageScore(): string {
    const total = this.scores.reduce((sum, item) => sum + item.score, 0);
    return (total / this.scores.length).toFixed(1);
  }

  get maxScore(): number {
    return Math.max(...this.scores.map((item) => item.score), 1);
  }

  getBarHeight(score: number): number {
    return Math.max(36, Math.round((score / this.maxScore) * 100));
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
      this.scores = this.scores.map((entry) =>
        entry.id === this.editingId ? { ...entry, date: trimmedDate, score: this.scoreForm.score } : entry
      );
      this.formMessage = 'Score updated successfully.';
    } else {
      this.scores = [
        ...this.scores,
        {
          id: Date.now(),
          date: trimmedDate,
          score: this.scoreForm.score
        }
      ];
      this.formMessage = 'Score added successfully.';
    }

    this.scores = this.sortedScores.slice(0, 5);
    this.cancelEdit();
  }

  startEdit(entry: ScoreEntry): void {
    this.editingId = entry.id;
    this.scoreForm = { date: entry.date, score: entry.score };
    this.formMessage = `Editing score from ${this.formatDate(entry.date)}.`;
  }

  deleteScore(entryId: number): void {
    this.scores = this.scores.filter((entry) => entry.id !== entryId);
    this.cancelEdit();
    this.formMessage = 'Score removed.';
  }

  cancelEdit(): void {
    this.editingId = null;
    this.scoreForm = { date: '', score: 36 };
  }

  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
