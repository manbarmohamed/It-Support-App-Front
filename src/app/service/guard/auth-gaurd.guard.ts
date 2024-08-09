import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthServiceService } from '../user-auth-service.service';
import { inject } from '@angular/core';

  export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
  const authService = inject(UserAuthServiceService);
  const router = inject(Router);

    const currentUser = authService.currentUserValue;
    if (currentUser) {
      console.log(currentUser.role+"///////////");
      console.log(route.data['roles']);
      

      
      // Check if route has data specifying allowed roles
      if (route.data['roles'] && !route.data['roles'].includes(currentUser.role)) {
        // User's role is not authorized, redirect to home page
        router.navigate(['/']);
        return false;
      }
      // Authorized, return true
      return true;
    }

    // Not logged in, redirect to login page with return url
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
