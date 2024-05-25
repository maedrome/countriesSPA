import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  @Input() placeholder: string = '';
  @Output() search = new EventEmitter<string>();
  @Input() initialValue: string = '';
  private inputSubject = new Subject<string>(); //Esto puede ser un observable pero como quiero usar .next() lo hago un subject
  private inputSubscription?: Subscription;
  

  // sendValue(term: string) {
  //   this.search.emit(term)
  // }

  ngOnInit(): void {
    this.inputSubscription = this.inputSubject
    .pipe(
      debounceTime(300))
    .subscribe((value) => {if(value!==''){this.search.emit(value)}}) 
  
  } 

  ngOnDestroy(): void {
    this.inputSubscription?.unsubscribe();
  }

  sendValue(term: string) {
    this.inputSubject.next(term);
  }
}
