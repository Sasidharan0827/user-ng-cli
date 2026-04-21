import { Component } from '@angular/core';

interface CharityProfile {
  name: string;
  category: string;
  location: string;
  impact: string;
  events: string[];
  featured: boolean;
  summary: string;
}

@Component({
  selector: 'app-hero-directory',
  templateUrl: './hero-directory.component.html',
  styleUrls: ['./hero-directory.component.scss'],
})
export class HeroDirectoryComponent {
  searchTerm = '';
  activeFilter = 'All';

  readonly filters = ['All', 'Education', 'Healthcare', 'Sustainability', 'Community'];

  readonly charities: CharityProfile[] = [
    {
      name: 'Global Literacy Front',
      category: 'Education',
      location: 'Bengaluru, India',
      impact: '1,280 learners reached',
      events: ['May Golf Day', 'Remote device drive'],
      featured: true,
      summary: 'Digital literacy labs, teacher support, and refurbished device distribution.'
    },
    {
      name: 'Kinetic Recovery',
      category: 'Healthcare',
      location: 'Delhi, India',
      impact: '860 mobility kits delivered',
      events: ['Adaptive sports clinic', 'Rehab fundraiser'],
      featured: true,
      summary: 'Rehabilitation, recovery, and mobility support for trauma survivors.'
    },
    {
      name: 'Verdant Initiative',
      category: 'Sustainability',
      location: 'Pune, India',
      impact: '42 hectares restored',
      events: ['Corporate tree drive', 'Community planting'],
      featured: false,
      summary: 'Climate resilience, watershed restoration, and green jobs creation.'
    },
    {
      name: 'Harbor Community Fund',
      category: 'Community',
      location: 'Chennai, India',
      impact: '315 families supported',
      events: ['Junior clinic', 'Emergency grant round'],
      featured: false,
      summary: 'Emergency household support and after-school programming in coastal communities.'
    }
  ];

  get filteredCharities(): CharityProfile[] {
    return this.charities.filter((charity) => {
      const matchesFilter = this.activeFilter === 'All' || charity.category === this.activeFilter;
      const term = this.searchTerm.trim().toLowerCase();
      const matchesTerm = !term || `${charity.name} ${charity.location} ${charity.summary}`.toLowerCase().includes(term);

      return matchesFilter && matchesTerm;
    });
  }
}
