import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  loggedInUser$ = this._authenticationService.user$;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

    constructor(
      private breakpointObserver: BreakpointObserver,
      private _authenticationService: AuthenticationService,
      private _router : Router
    ) {}

    logout() {
      this._authenticationService.logout();
      window.location.reload();
    }
    
    details(){
      this._router.navigate(['/user']);
    }
}
