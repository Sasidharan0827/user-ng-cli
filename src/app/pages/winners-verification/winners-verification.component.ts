import { Component, OnInit } from '@angular/core';
import { WinnerSubmission } from '../../models/content.model';
import { WinnersService } from '../../service/winners.service';

@Component({
  selector: 'app-winners-verification',
  templateUrl: './winners-verification.component.html',
  styleUrls: ['./winners-verification.component.scss'],
})
export class WinnersVerificationComponent implements OnInit {
  submissions: WinnerSubmission[] = [];

  constructor(private readonly winnersService: WinnersService) {}

  ngOnInit(): void {
    this.winnersService.getSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
    });
  }

  setState(submission: WinnerSubmission, state: WinnerSubmission['state']): void {
    this.winnersService.updateState(submission.id, state).subscribe((submissions) => {
      this.submissions = submissions;
    });
  }

  get pendingCount(): number {
    return this.submissions.filter((item) => item.state === 'Pending').length;
  }
}
