import { inject, Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { catchError, Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CacheStorage } from '../interfaces/cacheStorage.interface';
import { Region } from '../interfaces/region.type';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = 'https://restcountries.com/v3.1/';
  public countries = signal<Country[]>([]);
  public country = signal<Country | undefined>(undefined);
  private http = inject(HttpClient);
  private router = inject(Router);
  public isLoading = signal<boolean>(false);
  searchSuscription ?: Subscription;
  cacheStorage: CacheStorage = {
    capital: {term: '', data: []},
    name: {term: '', data: []},
    region: {data: []}
  };

  constructor() {
    this.loadFromLocalStorage();
   }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStorage')){
      return
    } 
    this.cacheStorage = JSON.parse(localStorage.getItem('cacheStorage')!);
  }

  searchCountries(term: string, url: string){
    this.isLoading.set(true);
    this.searchSuscription?.unsubscribe();
    this.searchSuscription = this.http.get<Country[]>(`${this.url}${url}/${term}`)
    .pipe(
      catchError(err => {console.log(err); this.countries.set([]); this.isLoading.set(false); return []}),
      tap(res => { 
        this.cacheStorage[url as keyof CacheStorage].data = res;
        this.cacheStorage[url as keyof CacheStorage].term = term;
      }),
      tap(() => this.saveToLocalStorage())
    )
    .subscribe(res => {this.countries.set(res); this.isLoading.set(false)})
  }

  getCountryByCode(code: string){
    this.http.get<Country[]>(`${this.url}alpha/${code}`)
    .pipe(catchError(err => {
      console.log(err);
      this.router.navigateByUrl('');
      return [] 
    }))
    .subscribe(res => {
      this.country.set(res[0])})
  }

}
