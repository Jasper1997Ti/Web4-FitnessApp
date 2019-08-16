import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

today = new Date();

  userService : AuthenticationService;

  constructor(
   private _firstName: string,
   private _lastName: string,
   private _email: string,
   private _trainingsSchemas: string[]) { }

  ngOnInit() {
//this.firstName = this.loggedInUser$
 this.userService.getUserDetails;
  }

  static fromJSON(json: any): UserDetailsComponent {
    const rec = new UserDetailsComponent(json.firstName, json.lastName, json.email,json.TrainingsSchemas);
        return rec;
  }

  get firstName() : string{
    return this._firstName;
  }
  get lastName() : string{
    return this._lastName;
  }
  get email() : string{
    return this._email;
  }
  get trainingsSchemas() : string[]{
    return this._trainingsSchemas;
  }
}


