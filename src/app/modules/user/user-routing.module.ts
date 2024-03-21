import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { IndexComponent } from '../../components/user/index/index.component';
import { CreateComponent } from '../../components/user/create/create.component';
import { EditComponent } from '../../components/user/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:idUser', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
