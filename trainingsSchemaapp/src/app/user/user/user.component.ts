import { User } from './../user.model';
import { Component, OnInit, Input } from '@angular/core';
import { TrainingsSchemaDataService } from 'src/app/trainings-schema/trainings-schema-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: User;

  constructor(private _trainingsSchemaDataService: TrainingsSchemaDataService) {}

  ngOnInit() {}

}
