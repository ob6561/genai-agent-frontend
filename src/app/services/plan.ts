import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanService {
  private apiUrl = 'https://pydantic-ai-backend.onrender.com/plan';

  constructor(private http: HttpClient) {}

  generatePlan(task: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { task });
  }
}
