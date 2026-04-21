import { Component } from '@angular/core';

interface PrizeTier {
  match: string;
  share: number;
  rollover: boolean;
  description: string;
}

@Component({
  selector: 'app-prize-pool',
  templateUrl: './prize-pool.component.html',
  styleUrls: ['./prize-pool.component.scss']
})
export class PrizePoolComponent {
  drawMode: 'Random' | 'Algorithmic' = 'Algorithmic';

  readonly prizeTiers: PrizeTier[] = [
    {
      match: '5-Number Match',
      share: 40,
      rollover: true,
      description: 'Top-tier jackpot that rolls to the next month if unclaimed.'
    },
    {
      match: '4-Number Match',
      share: 35,
      rollover: false,
      description: 'Shared equally between all winners in the tier.'
    },
    {
      match: '3-Number Match',
      share: 25,
      rollover: false,
      description: 'Designed to deliver frequent reward visibility and excitement.'
    }
  ];

  simulationCount = 4820;
  estimatedPattern = 'Most frequent scores weighted';

  runPreview(): void {
    if (this.drawMode === 'Algorithmic') {
      this.simulationCount += 275;
      this.estimatedPattern = 'Weighting increased for uncommon 5-score clusters';
      return;
    }

    this.simulationCount += 410;
    this.estimatedPattern = 'Uniform random draw across active subscriber pool';
  }

}
