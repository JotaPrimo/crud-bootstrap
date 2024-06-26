import { Component } from '@angular/core';

// components
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../../services/user-service.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  userForm: FormGroup;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.email,
      ]),
    });
  }
  

  store() {
    this.userService
      .store(this.userForm.value)
      .subscribe((res) => {
        this.messageService.success("Registro cadastrado com sucesso");
        this.router.navigateByUrl('user/index');
      });
    this.messageService.info('Operação cancelada');
    return;
  }

}
