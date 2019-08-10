import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { debounceTime, switchMap } from 'rxjs/operators';
import { TrainingsSchemaDataService } from '../trainings-schema-data.service';
import { TrainingsSchema } from '../trainingsSchema.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainings-schema-list',
  templateUrl: './trainings-schema-list.component.html',
  styleUrls: ['./trainings-schema-list.component.css']
})
export class TrainingsSchemaListComponent implements OnInit {
  public trainingsSchemas : TrainingsSchema[];

  public filterTrainingsSchemaName : string ='';
  public filterTrainingsSchema$ = new Subject<string>();
  
  private _fetchTrainingsSchemas$: Observable<TrainingsSchema[]> 
    = this._trainingsSchemaDataService.trainingsschemas$;
    public loadingError$ = this._trainingsSchemaDataService.loadingError$;

    constructor(
      private _trainingsSchemaDataService: TrainingsSchemaDataService,
      private _router: Router,
      private _route: ActivatedRoute
    ) {}
  
    ngOnInit() {
      this.filterTrainingsSchema$
        .pipe(
          distinctUntilChanged(),
          debounceTime(400)
      ).subscribe(val => {
        const params = val ? { queryParams: { filter: val } } : undefined;
        this._router.navigate(['/trainingsschema/list'], params);
      });


      this._route.queryParams
      .pipe(
        switchMap(newParams => {
          // set the value of the input field with the url parameter as well
          if (newParams['filter']) {
            this.filterTrainingsSchemaName = newParams['filter'];
          }
          // when the queryparameter changes, take the filter parameter and use it to ask
          // the service for all recipes with this filter in their name
          // this._recipeDataService.getRecipes$(params['filter']).subscribe(
          return this._trainingsSchemaDataService.getTrainingsSchemas$(newParams['filter']);
        })
      )
      .subscribe(val => {
        this.trainingsSchemas = val;
        // once the trainingsSchemas are received, we ask for all the ratings of these trainingsSchemas
        // and update the trainingsSchemas with them
        this._trainingsSchemaDataService
          .getTrainingsSchemaRatings(this.trainingsSchemas)
          .subscribe((ratingList: any[]) => {
            for (const oneRating of ratingList) {
              const { id, rating } = oneRating;
              this.trainingsSchemas.find(rec => rec.id === id).rating = rating;
            }
          });
      });
    }

  // get trainingsschemas$() : Observable<TrainingsSchema[]>{
  //   return this._fetchTrainingsSchemas$;
  // }
}
