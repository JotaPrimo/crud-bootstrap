import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// components
import { IndexComponent } from './components/user/index/index.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, NavbarComponent, FooterComponent, IndexComponent, 
    ],
  templateUrl: './app.component.html',
  template: `<router-outlet />`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-bootstrap';
}
