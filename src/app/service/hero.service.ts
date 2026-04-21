import { Injectable } from '@angular/core';
import { Hero, Winner } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 'DH-7729',
      name: 'Marcus Thorne',
      image: 'assets/marcus.jpg',
      tier: 'PLATINUM',
      status: 'Active',
      impactScore: 2440,
    },
    {
      id: 'DH-1104',
      name: 'Sarah Jenkins',
      image: 'assets/sarah.jpg',
      tier: 'STANDARD',
      status: 'Active',
      impactScore: 940,
    },
    {
      id: 'DH-9021',
      name: 'Alex Rivera',
      image: 'assets/alex.jpg',
      tier: 'LEGENDARY',
      status: 'On Hold',
      impactScore: 11200,
    },
  ];

  private winners: Winner[] = [
    {
      id: 'W-001',
      name: 'Elias Vance',
      image: 'assets/elias.jpg',
      prize: '$5,000 Major Draw',
    },
    {
      id: 'W-002',
      name: 'Janice K.',
      image: 'assets/janice.jpg',
      prize: '$250 Charity Boost',
    },
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getWinners(): Winner[] {
    return this.winners;
  }
}
