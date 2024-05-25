import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-side-nav',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './side-nav.component.html',
  styles: ``,
})
export class SideNavComponent { 
  @ViewChild('sideNav') sideNav!: ElementRef<HTMLDivElement>;
  private sharedService = inject(SharedService);

  constructor(){
  }

 
  toggleSideNav(){
    this.sideNav.nativeElement.classList.toggle('-translate-x-full');
    this.sharedService.pseudoSelector!.classList.toggle('hidden');
  };
}
