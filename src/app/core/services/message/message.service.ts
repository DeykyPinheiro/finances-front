import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  success(message: string): void {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  error(message: string): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  warning(message: string): void {
    Swal.fire({
      title: "Are you sure?",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
