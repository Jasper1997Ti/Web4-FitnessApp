import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TrainingsSchema } from './trainingsSchema.model';

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

   getTrainingsSchema$(id) : Observable<TrainingsSchema>{
     console.log(`${environment.apiUrl}/TrainingsSchema/${id}`);
    return this.http.get(`${environment.apiUrl}/TrainingsSchema/${id}`).pipe(
      map(
        (item: any): TrainingsSchema => TrainingsSchema.fromJSON(item)          
      )
    );
  }
}
