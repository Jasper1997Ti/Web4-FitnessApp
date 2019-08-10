import { TrainingsSchema } from './trainingsSchema.model';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';


import { Observable } from 'rxjs';
import { TrainingsSchemaDataService } from './trainings-schema-data.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingsSchemaResolver implements Resolve<TrainingsSchema> {
  constructor(private trainingsSchemaService: TrainingsSchemaDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TrainingsSchema> {
    return this.trainingsSchemaService.getTrainingsSchema$(route.params['id']);
  }
}