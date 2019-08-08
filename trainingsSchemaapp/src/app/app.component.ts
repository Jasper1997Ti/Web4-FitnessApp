import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { TrainingsSchema } from './trainings-schema/trainingsSchema.model';
import { TrainingsSchemaDataService } from './trainings-schema/trainings-schema-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public filterTrainingsSchemaName : string;
  public filterTrainingsSchema$ = new Subject<string>();
  private _fetchTrainingsSchemas$: Observable<TrainingsSchema[]> 
    = this._trainingsSchemaDataService.trainingsschemas$;
    public loadingError$ = this._trainingsSchemaDataService.loadingError$;

  constructor(private _trainingsSchemaDataService: TrainingsSchemaDataService){
    this.filterTrainingsSchema$.pipe(
      distinctUntilChanged(),
      debounceTime(300))
    .subscribe(
      val => this.filterTrainingsSchemaName = val);
  }

  applyFilter(filter: string){
    this.filterTrainingsSchemaName = filter;
  }

  get trainingsschemas$() : Observable<TrainingsSchema[]>{
    return this._fetchTrainingsSchemas$;
  }

  addNewTrainingsSchema(trainingsSchema) {
    this._trainingsSchemaDataService.addNewTrainingsSchema(trainingsSchema).subscribe();
  }

}
