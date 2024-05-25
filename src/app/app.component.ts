import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { PseudoSelectorComponent } from './shared/components/pseudo-selector/pseudo-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SideNavComponent, PseudoSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';
}
