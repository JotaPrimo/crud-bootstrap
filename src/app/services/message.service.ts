import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  confirm(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      return result.isConfirmed;
    });
  }

  success(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: "success"
    });
  }

  error(title: string, text: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: "error"
    });
  }
}
