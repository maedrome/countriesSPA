import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-page.component.html',
  styles: ``,
})
export default class CountryPageComponent implements OnInit{
  private route = inject(ActivatedRoute);
  countriesService = inject(CountriesService);
  countryId: string = '';
  translationLanguages = ['ara', 'ces', 'fra', 'jpn', 'kor', 'per','rus', 'spa', 'zho'];
  public getRouteParams() {
    this.route.params.subscribe(params => {
      this.countryId = params['id'];
      this.countriesService.getCountryByCode(this.countryId);
    })
  }
  constructor() {
    
  }
  ngOnInit(): void {
    this.getRouteParams();
  }

  getTranslationList(){
    let translationList: String[] = [];
    for(let lang of this.translationLanguages){
      translationList.push(this.countriesService.country()?.translations[lang].common ?? '');
    }
    return translationList;
  }

 }
