import { Component } from '@angular/core';

// components
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
