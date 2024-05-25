import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'shared-pseudo-selector',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pseudo-selector.component.html',
  styles: ``,
})
export class PseudoSelectorComponent {
  @ViewChild('pseudoSelector') divPseudoSelector !: ElementRef<HTMLDivElement>;
  sharedService = inject(SharedService);
  
  ngAfterViewInit() {
    this.sharedService.pseudoSelector = this.divPseudoSelector.nativeElement;
  }
  
 }
