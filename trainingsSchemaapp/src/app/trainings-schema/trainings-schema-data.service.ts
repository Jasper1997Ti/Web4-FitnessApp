import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TrainingsSchema } from './trainingsSchema.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingsSchemaDataService {
  
  public loadingError$ = new Subject<string>();
  
  constructor(private http: HttpClient){}

  rateTrainingsSchema(trainingsSchema: TrainingsSchema, rating: number): Observable<number> {
    return this.http
      .put(`${environment.apiUrl}/TrainingsSchema/Rate/${trainingsSchema.id}/${rating}`, {})
      .pipe(
        map((res: any) => {
          return res['rating'];
        })
      );
  }

  getTrainingsSchemaRatings(trainingsSchemas: TrainingsSchema[]): Observable<any> {
    // ask for ratings of a collection of trainingsSchemas
    // (the ratings of the logged in user will be returned, whom is known through the jwt token in the http header)
    const idQueryParam = trainingsSchemas.map(rec => `id=${rec.id}`).join('&');
    return this.http.get(
      `${environment.apiUrl}/TrainingsSchema/Rated/?${idQueryParam}`
    );
  }

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

  updateTrainingsSchema(trainingsSchema: TrainingsSchema) {
    console.log("updaten", trainingsSchema.id);
    return this.http
      .put(`${environment.apiUrl}/TrainingsSchema/${trainingsSchema.id}`, trainingsSchema.toJSON()).pipe();
  }

  // deleteTrainingsSchema(trainingsSchema: TrainingsSchema) {
  //   console.log("deleten", trainingsSchema.id);
  //   return this.http.delete(`${environment.apiUrl}/TrainingsSchema/${trainingsSchema.id}`);
  // }

  deleteTrainingsSchema(trainingsSchema: TrainingsSchema) : Observable<void> {
    console.log("deleten", trainingsSchema.id);
    return this.http.delete<void>(`${environment.apiUrl}/TrainingsSchema/${trainingsSchema.id}`).pipe();
  }

  getTrainingsSchemas$(name?: string, categorie?: string, exercise?: string) {
    let params = new HttpParams();
    params = name ? params.append('name', name) : params;
    params = categorie ? params.append('categorie', categorie) : params;
    params = exercise ? params.append('exerciseName', exercise) : params;
    return this.http.get(`${environment.apiUrl}/TrainingsSchema/`, { params }).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): TrainingsSchema[] => list.map(TrainingsSchema.fromJSON))
    );
  }

  getUserDetails(): Observable<User>{
    console.log(`${environment.apiUrl}/Trainee`);
   return this.http.get(`${environment.apiUrl}/Trainee`).pipe(
     map(
       (item: any): User => User.fromJSON(item)          
     )
   );
 }
}
