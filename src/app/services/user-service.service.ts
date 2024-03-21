import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiPath } from '../shared/apiPath';
import { httpOptions } from '../config/http-options';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) {}

  getListLocalUsers() {
    return [
      {
        id: 1,
        name: 'Jota Santos',
        cpf: '046.667.061-35',
        email: 'gestald118@gmail.com',
        ativo: true,
        created_at: '2024-05-09',
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(ApiPath.USERS)
      .pipe(catchError(this.errorHandler));
  }

  store(user: User): Observable<User> {
    return this.httpClient
      .post<User>(ApiPath.USERS, JSON.stringify(user), httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error);

    throw new Error(errorMessage);
  }
}
