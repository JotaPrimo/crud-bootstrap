import { Component, OnInit } from '@angular/core';
import { CardHeaderComponent } from '../../layout/card/card-header/card-header.component';
import { CardBodyComponent } from '../../layout/card/card-body/card-body.component';
import { CardFooterComponent } from '../../layout/card/card-footer/card-footer.component';
import { User } from '../../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { MessageService } from '../../../services/message.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonVoltarComponent } from '../../layout/shared/button-voltar/button-voltar.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ButtonVoltarComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  id: number | any;
  user!: User;
  userEditForm: FormGroup;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.userEditForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.email,
      ]),
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUser'];
    this.userService.find(this.id).subscribe((data: User) => {
      this.user = data;
    });
  }

  update() {
    this.userService
      .update(this.id, this.userEditForm.value)
      .subscribe((res) => {
        this.messageService.info('Operação cancelada');
        this.router.navigateByUrl('user/index');
      });
  }
}
