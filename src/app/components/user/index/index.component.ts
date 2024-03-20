import { UserServiceService } from './../../../services/user-service.service';
import { Component, OnInit } from '@angular/core';

// components
import { SearchComponent } from '../search/search.component';
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';

@Component({
  selector: 'user-index',
  standalone: true,
  imports: [ SearchComponent, CardBodyComponent, 
    CardFooterComponent, CardHeaderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  
  users: any[] | undefined;

  constructor(private userServiceService: UserServiceService) {}
  
 ngOnInit(): void {
  this.users = this.userServiceService.getUsers();    
 }

}
