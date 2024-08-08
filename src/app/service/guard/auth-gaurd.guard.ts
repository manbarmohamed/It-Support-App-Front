import { CanActivateFn } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  return true;
};
