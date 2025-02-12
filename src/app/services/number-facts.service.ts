import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NumberFacts {
  number: number;
  isPrime: boolean;
  isPerfect: boolean;
  properties: string[];
  digitSum: number;
  funFact: string;
}

@Injectable({
  providedIn: 'root'
})
export class NumberFactsService {
  private apiUrl = 'https://localhost:7110/api/Math'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getNumberFacts(number: number): Observable<NumberFacts> {
    return this.http.get<NumberFacts>(`${this.apiUrl}/${number}`);
  }
}

