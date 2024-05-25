import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';
import { LoadingPulseComponent } from '../../../shared/components/loadingPulse/loadingPulse.component';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule, SearchBoxComponent, CountriesTableComponent, LoadingPulseComponent
  ],
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export default class ByCapitalPageComponent implements OnInit {
  countriesService = inject(CountriesService);
  initialValue: string = ''
  
  search(term: string){
    this.countriesService.searchCountries(term, 'capital')
  }

  ngOnInit(): void {
    this.countriesService.countries.set(this.countriesService.cacheStorage.capital.data);
    this.initialValue = this.countriesService.cacheStorage.capital.term;
  }
 }
