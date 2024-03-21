import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getToast() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    return Toast;
  }

  async confirm(title: string, text: string) {
    return await Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    });
  }

  success(text: string) {
    this.getToast().fire({
      icon: 'success',
      title: 'Signed in successfully',
    });
  }

  error(text: string) {
    this.getToast().fire({
      icon: 'error',
      title: text,
    });
  }

  info(text: string) {
    this.getToast().fire({
      icon: 'info',
      title: text,
    });
  }
}
