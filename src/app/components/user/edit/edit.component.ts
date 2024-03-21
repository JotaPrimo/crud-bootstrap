import { Component } from '@angular/core';
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
