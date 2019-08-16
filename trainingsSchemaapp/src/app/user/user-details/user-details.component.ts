import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingsSchemaDataService } from 'src/app/trainings-schema/trainings-schema-data.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

today = new Date();
private _fetchUser$: Observable<User> 
    = this._trainingsSchemaDataService.getUserDetails();

  constructor(private _router : Router, private _trainingsSchemaDataService : TrainingsSchemaDataService) {
   }

  ngOnInit() {
  }

  get user$(): Observable<User>{
    return this._fetchUser$;
  }

  returnToList(){
    this._router.navigate(['/trainingsschema/list']);
  }
}


