import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from '../../components/user/index/index.component';
import { CreateComponent } from '../../components/user/create/create.component';
import { EditComponent } from '../../components/user/edit/edit.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    HttpClient,        
  ],
  providers: [ HttpClientModule ]
})
export class UserModule { }
