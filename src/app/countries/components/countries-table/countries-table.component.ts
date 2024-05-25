import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries-table',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './countries-table.component.html',
  styles: ``,
})
export class CountriesTableComponent {
  countriesService = inject(CountriesService);
  searchsCount: number = 0;
  detectSearch = effect(() => {
    this.countriesService.countries();
    this.searchsCount++;
    console.log(this.searchsCount);
  }
   ); 
   
}
