import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

constructor(private authService: AuthenticationService, private router: Router){}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean {
  if (this.authService.user$.getValue()) {
    return true;
  }
  this.authService.redirectUrl = state.url;
  this.router.navigate(['/login']);
  return false;
}
}
