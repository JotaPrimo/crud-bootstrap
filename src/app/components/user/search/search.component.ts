import { Component } from '@angular/core';


// components
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'user-search',
  standalone: true,
  imports: [RouterLink, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
