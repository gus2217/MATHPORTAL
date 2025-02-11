import { Component } from '@angular/core';
import { NumberFactsService, NumberFacts } from '../../services/number-facts.service';

@Component({
  selector: 'app-number-facts',
  templateUrl: './number-facts.component.html',
  styleUrls: ['./number-facts.component.css']
})
export class NumberFactsComponent {
  inputNumber: number | null = null;
  numberFacts: NumberFacts | null = null; 
  errorMessage: string = '';

  constructor(private numberFactsService: NumberFactsService) {}

  fetchNumberFacts() {
    if (this.inputNumber !== null) {
      this.numberFactsService.getNumberFacts(this.inputNumber).subscribe({
        next: (response) => {
          console.log('API Response:', response);  // ✅ Debugging log
          this.numberFacts = response;
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = 'Failed to fetch data. Please try again.';
          console.error('Error fetching number facts:', error);
        }
      });
    }
  }
}
