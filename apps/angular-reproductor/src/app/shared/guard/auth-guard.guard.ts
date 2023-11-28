import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  const token = sessionStorage.getItem('token');

  // Si el token es nulo, redirecciona al usuario al login
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // De lo contrario, permite la navegación
  return true;
};
