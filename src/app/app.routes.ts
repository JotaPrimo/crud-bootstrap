import { Routes } from '@angular/router';
import { EditComponent } from './components/user/edit/edit.component';
import { CreateComponent } from './components/user/create/create.component';
import { IndexComponent } from './components/user/index/index.component';

export const routes: Routes = [
    { path: 'user', redirectTo: 'user/index' },
    { path: 'user/index', component: IndexComponent },
    { path: 'user/create', component: CreateComponent },
    { path: 'user/edit/:idUser', component: EditComponent },
];
