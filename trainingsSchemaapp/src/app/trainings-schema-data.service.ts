import { Injectable } from '@angular/core';
import { TrainingsSchema } from './trainingsSchema.model';
import { TRAININGSSCHEMAS } from './mock-trainingsSchema';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { delay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingsSchemaDataService {
  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient){}

  get trainingsschemas$() : Observable<TrainingsSchema[]>{
    return this.http.get(`${environment.apiUrl}/TrainingsSchema/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map(
        (list: any[]): TrainingsSchema[] => list.map(TrainingsSchema.fromJSON)              
      )
    );
  }

  addNewTrainingsSchema(trainingsSchema: TrainingsSchema) {
   // this._trainingsSchemas.push(trainingsSchema);
  return this.http.post(`${environment.apiUrl}/TrainingsSchema/`, trainingsSchema.toJSON());
  }
}
