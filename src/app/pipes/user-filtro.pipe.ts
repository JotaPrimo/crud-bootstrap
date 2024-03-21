import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';

@Pipe({
  name: 'userFiltro',
  standalone: true
})
export class UserFiltroPipe implements PipeTransform {

  transform(users: any, searchData: any): any {
    console.log(users);

    if (!users || !searchData) {
      console.log("if passei por aqui");
      return users;
    }

    console.log("passei por aqui");
    
    return users.filter(
      (user: any) =>
        (!searchData.name || user.name.toLowerCase().includes(searchData.name.toLowerCase())) &&
        (!searchData.cpf || user.cpf.toLowerCase().includes(searchData.cpf.toLowerCase())) &&
        (!searchData.email || user.email.toLowerCase().includes(searchData.email.toLowerCase()))
    );
  }

}
