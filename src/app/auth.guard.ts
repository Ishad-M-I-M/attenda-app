import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service'

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const authenticated = await auth.isAuthenticated();
  if (!authenticated) {
    await auth.signIn();
    return false;
  }
  return true;
};
