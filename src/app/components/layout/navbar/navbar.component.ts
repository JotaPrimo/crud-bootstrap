import { Component } from '@angular/core';

// components
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserRoutingModule } from '../../../modules/user/user-routing.module';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, UserRoutingModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
