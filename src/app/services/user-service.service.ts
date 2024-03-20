import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  getUsers() {
    return [
      {
        id: 1,
        nome: 'Usuário 1',
        cpf: '407.225.110-00',
        email: 'usuario1@example.com',
        telefone: '123-456-7890',
      },
      {
        id: 2,
        nome: 'Usuário 2',
        cpf: '509.123.640-68',
        email: 'usuario2@example.com',
        telefone: '987-654-3210',
      },
      {
        id: 3,
        nome: 'Usuário 3',
        cpf: '186.597.180-46',
        email: 'usuario3@example.com',
        telefone: '555-555-3333',
      },
      {
        id: 4,
        nome: 'Usuário 4',
        cpf: '063.239.930-90',
        email: 'usuario3@example.com',
        telefone: '555-555-4444',
      },
      {
        id: 5,
        nome: 'Usuário 5',
        cpf: '901.831.590-71',
        email: 'usuario5@example.com',
        telefone: '555-555-5555',
      },
      {
        id: 6,
        nome: 'Usuário 6',
        cpf: '387.271.690-57',
        email: 'usuario6@example.com',
        telefone: '666-666-5555',
      },
      {
        id: 7,
        nome: 'Usuário 7',
        cpf: '892.330.720-37',
        email: 'usuario7@example.com',
        telefone: '7777-555-5555',
      },
    ];
  }
}
