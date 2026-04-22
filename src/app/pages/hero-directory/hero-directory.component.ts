import { Component, OnInit } from '@angular/core';
import { CharityProfile } from '../../models/content.model';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-hero-directory',
  templateUrl: './hero-directory.component.html',
  styleUrls: ['./hero-directory.component.scss'],
})
export class HeroDirectoryComponent implements OnInit {
  searchTerm = '';
  activeFilter = 'All';

  filters: string[] = ['All'];
  charities: CharityProfile[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getCharities().subscribe((charities) => {
      this.charities = charities;
      this.filters = ['All', ...Array.from(new Set(charities.map((charity) => charity.category)))];
    });
  }

  get filteredCharities(): CharityProfile[] {
    return this.charities.filter((charity) => {
      const matchesFilter = this.activeFilter === 'All' || charity.category === this.activeFilter;
      const term = this.searchTerm.trim().toLowerCase();
      const matchesTerm = !term || `${charity.name} ${charity.location} ${charity.summary}`.toLowerCase().includes(term);

      return matchesFilter && matchesTerm;
    });
  }
}
