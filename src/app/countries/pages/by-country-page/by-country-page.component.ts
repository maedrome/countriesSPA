import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';
import { LoadingPulseComponent } from '../../../shared/components/loadingPulse/loadingPulse.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule, SearchBoxComponent, CountriesTableComponent, LoadingPulseComponent
  ],
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export default class ByCountryPageComponent { 
  countriesService = inject(CountriesService);
  initialValue: string = '';

  search(term: string){
    this.countriesService.searchCountries(term, 'name');
  }
  ngOnInit(): void {
    this.countriesService.countries.set(this.countriesService.cacheStorage.name.data);
    this.initialValue = this.countriesService.cacheStorage.name.term;
  }
}
