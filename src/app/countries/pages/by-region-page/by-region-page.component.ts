import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule, SearchBoxComponent, CountriesTableComponent
  ],
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export default class ByRegionPageComponent implements OnInit{
  
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countriesService = inject(CountriesService);
  initialValue: string = '';


  search(region: Region, event: Event){
    this.countriesService.searchCountries(region, 'region');
    this.repaintButtons(event);
  }
  ngOnInit(): void {
    this.countriesService.countries.set(this.countriesService.cacheStorage.region.data);
    this.initialValue = `${this.countriesService.cacheStorage.region.term}`;
    
  }

  repaintButtons(event: Event){
    const buttons = document.querySelectorAll('.rounded-lg');
    buttons.forEach(button => {
      button.classList.remove('bg-slate-900', 'text-white');
      button.classList.add('bg-white', 'text-slate-900');
    });
    const button = event.target as HTMLElement;
    button.classList.remove('bg-white', 'text-slate-900');
    button.classList.add('bg-slate-900', 'text-white');
  }
 }
