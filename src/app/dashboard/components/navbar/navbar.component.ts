import { RouterLink, RouterLinkActive } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {}
