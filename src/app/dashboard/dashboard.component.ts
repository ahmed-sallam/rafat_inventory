import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styles: ``,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
})
export class DashboardComponent {}
