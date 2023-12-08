import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const tokenAccessToken: string = localStorage.getItem("tokenAccessToken") || "";
  if (tokenAccessToken != "") {
    return true;
  }

  router.navigate(["/auth"])
  return false;
};
