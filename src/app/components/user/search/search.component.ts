import { Component, EventEmitter, Input, Output } from '@angular/core';

// components
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-search',
  standalone: true,
  imports: [
    RouterLink,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  name: string = '';
  cpf: string = '';
  email: string = '';

  search() {
    const searchData = {
      name: this.name,
      cpf: this.cpf,
      email: this.email,
    };
    this.searchEvent.emit(searchData);
  }

  clearSearchData() {

    this.name = '';
    this.cpf = '';
    this.email = '';

    const searchData = {
      name: this.name,
      cpf: this.cpf,
      email: this.email,
    };

    this.searchEvent.emit(searchData);
  }
}
