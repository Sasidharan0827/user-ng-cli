import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WinnerSubmission } from '../models/content.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {
  constructor(private readonly apiService: ApiService) {}

  getSubmissions(): Observable<WinnerSubmission[]> {
    return this.apiService.get<WinnerSubmission[]>('/winners-verification');
  }

  updateState(id: string, state: WinnerSubmission['state']): Observable<WinnerSubmission[]> {
    return this.apiService.patch<WinnerSubmission[]>(`/winners-verification/${id}/state`, { state });
  }
}
