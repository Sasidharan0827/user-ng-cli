import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiBaseUrl = 'http://localhost:3000/api';
  private readonly useMockData = true;

  constructor(private readonly http: HttpClient) {}

  isMockMode(): boolean {
    return this.useMockData;
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}${endpoint}`);
  }
}
