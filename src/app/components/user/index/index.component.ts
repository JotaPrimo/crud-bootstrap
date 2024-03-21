import { UserServiceService } from './../../../services/user-service.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';

// components
import { SearchComponent } from '../search/search.component';
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'user-index',
  standalone: true,
  imports: [
    SearchComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  users: User[] | undefined;

  constructor(
    private userServiceService: UserServiceService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userServiceService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  async delete(id: number) {
    try {
      let result = await this.messageService.confirm(
        'Atenção',
        'Deletar este registro ?'
      );

      if (result.isConfirmed) {
        let resultDelete = this.userServiceService
          .delete(id)
          .subscribe((res) => {
            this.users = this.users?.filter((item) => item.id !== id);
            this.messageService.success('Registro deletado com sucesso');
          });
      
        return;
      }

      this.messageService.info('Operação cancelada');
      return;

    } catch (error: any) {
      this.messageService.error('Ocorreu um erro');
      return;
    }
  }
}
