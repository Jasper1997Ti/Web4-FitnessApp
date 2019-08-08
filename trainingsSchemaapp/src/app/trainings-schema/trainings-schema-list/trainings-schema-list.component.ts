import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TrainingsSchema } from '../trainingsSchema.model';
import { TrainingsSchemaDataService } from '../trainings-schema-data.service';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-trainings-schema-list',
  templateUrl: './trainings-schema-list.component.html',
  styleUrls: ['./trainings-schema-list.component.css']
})
export class TrainingsSchemaListComponent implements OnInit {
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

  ngOnInit() {}

  applyFilter(filter: string){
    this.filterTrainingsSchemaName = filter;
  }

  get trainingsschemas$() : Observable<TrainingsSchema[]>{
    return this._fetchTrainingsSchemas$;
  }

  // addNewTrainingsSchema(trainingsSchema) {
  //   this._trainingsSchemaDataService.addNewTrainingsSchema(trainingsSchema).subscribe();
  // }


}
