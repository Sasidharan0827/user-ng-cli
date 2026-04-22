import { Component, OnInit } from '@angular/core';
import { LandingData } from '../../models/content.model';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-charity-impact',
  templateUrl: './charity-impact.component.html',
  styleUrls: ['./charity-impact.component.scss']
})
export class CharityImpactComponent implements OnInit {
  data: LandingData = {
    hero: {
      eyebrow: '',
      title: '',
      lead: '',
      stats: [],
      missionCard: {
        tag: '',
        title: '',
        items: []
      }
    },
    journey: [],
    plans: [],
    charities: []
  };

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getLanding().subscribe((data) => {
      this.data = data;
    });
  }
}
