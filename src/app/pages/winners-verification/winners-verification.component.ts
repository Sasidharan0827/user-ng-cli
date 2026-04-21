import { Component } from '@angular/core';

interface WinnerSubmission {
  name: string;
  prize: string;
  submittedAt: string;
  proof: string;
  state: 'Pending' | 'Approved' | 'Rejected' | 'Paid';
}

@Component({
  selector: 'app-winners-verification',
  templateUrl: './winners-verification.component.html',
  styleUrls: ['./winners-verification.component.scss'],
})
export class WinnersVerificationComponent {
  readonly submissions: WinnerSubmission[] = [
    {
      name: 'Elias Vance',
      prize: '$5,000 Major Draw',
      submittedAt: '18 Apr 2026',
      proof: 'Stableford screenshot uploaded',
      state: 'Pending'
    },
    {
      name: 'Janice K.',
      prize: '$250 Charity Boost',
      submittedAt: '16 Apr 2026',
      proof: 'Platform score export attached',
      state: 'Approved'
    },
    {
      name: 'Rohan Mehta',
      prize: '$1,200 4-Match Reward',
      submittedAt: '14 Apr 2026',
      proof: 'Awaiting upload',
      state: 'Rejected'
    }
  ];

  setState(submission: WinnerSubmission, state: WinnerSubmission['state']): void {
    submission.state = state;
  }

  get pendingCount(): number {
    return this.submissions.filter((item) => item.state === 'Pending').length;
  }
}
