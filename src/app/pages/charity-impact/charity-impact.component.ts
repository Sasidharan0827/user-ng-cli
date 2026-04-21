import { Component } from '@angular/core';

interface LandingJourneyStep {
  step: string;
  title: string;
  copy: string;
}

interface FeaturedCharity {
  name: string;
  category: string;
  summary: string;
  metric: string;
}

@Component({
  selector: 'app-charity-impact',
  templateUrl: './charity-impact.component.html',
  styleUrls: ['./charity-impact.component.scss']
})
export class CharityImpactComponent {
  readonly journey: LandingJourneyStep[] = [
    {
      step: '01',
      title: 'Subscribe',
      copy: 'Choose a monthly or yearly plan and unlock the full score, draw, and charity experience.'
    },
    {
      step: '02',
      title: 'Enter Scores',
      copy: 'Track your latest 5 Stableford rounds with date validation and reverse-chronological history.'
    },
    {
      step: '03',
      title: 'Support Charity',
      copy: 'Select a charity at signup and increase your contribution percentage whenever you want.'
    },
    {
      step: '04',
      title: 'Win Monthly Draws',
      copy: 'Compete for 3, 4, and 5-number reward tiers, with jackpot rollover if the top tier is unclaimed.'
    }
  ];

  readonly charities: FeaturedCharity[] = [
    {
      name: 'Global Literacy Front',
      category: 'Education',
      summary: 'Builds digital-first learning environments in underserved communities.',
      metric: '1,280 learners funded'
    },
    {
      name: 'Verdant Initiative',
      category: 'Sustainability',
      summary: 'Restores damaged ecosystems with measurable community employment programs.',
      metric: '42 hectares restored'
    },
    {
      name: 'Kinetic Recovery',
      category: 'Healthcare',
      summary: 'Supports mobility and rehabilitation projects for conflict-affected survivors.',
      metric: '860 mobility kits delivered'
    }
  ];

  readonly plans = [
    {
      name: 'Monthly',
      price: '$19',
      cadence: 'per month',
      detail: 'Flexible access with monthly draw eligibility and live charity tracking.'
    },
    {
      name: 'Yearly',
      price: '$190',
      cadence: 'per year',
      detail: 'Discounted annual plan with uninterrupted access and faster loyalty progression.'
    }
  ];
}
