import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscribeOptions } from '../models/content.model';
import { ApiService } from './api.service';

interface SubscribePayload {
  planId: 'monthly' | 'yearly';
  name: string;
  email: string;
  charity: string;
  contribution: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor(private readonly apiService: ApiService) {}

  getOptions(): Observable<SubscribeOptions> {
    return this.apiService.get<SubscribeOptions>('/subscribe-options');
  }

  submit(payload: SubscribePayload): Observable<{ message: string }> {
    return this.apiService.post<{ message: string }>('/subscribe', payload);
  }
}
