import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharityProfile, LandingData } from '../models/content.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private readonly apiService: ApiService) {}

  getLanding(): Observable<LandingData> {
    return this.apiService.get<LandingData>('/landing');
  }

  getCharities(): Observable<CharityProfile[]> {
    return this.apiService.get<CharityProfile[]>('/charities');
  }
}
