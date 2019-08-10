import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TrainingsSchema } from '../trainingsSchema.model';
import { TrainingsSchemaDataService } from '../trainings-schema-data.service';
import { RatingComponent } from 'src/app/rating/rating.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-trainings-schema',
  templateUrl: './trainings-schema.component.html',
  styleUrls: ['./trainings-schema.component.css']
})
export class TrainingsSchemaComponent implements OnInit {

  @Input() public trainingsSchema: TrainingsSchema;
  @ViewChild('ratingComponent', {static : false}) public ratingComp: RatingComponent;

  constructor(private _trainingsSchemaDataService: TrainingsSchemaDataService) {}

  ngOnInit() {}

  adjustRating(clickObj: any): void {
    this.trainingsSchema.rating = clickObj.rating;
    this._trainingsSchemaDataService.rateTrainingsSchema(this.trainingsSchema, clickObj.rating).subscribe(
      newRating => {
        this.trainingsSchema.rating = newRating;
      },
      () => {
        this.trainingsSchema.rating = 0;
      }
    );

//   ngOnInit() {
//     this.ratingComp.ratingChange$
//       .pipe(
//         switchMap(newRating => {
//           return this._trainingsSchemaDataService.rateTrainingsSchema(this.trainingsSchema, newRating);
//         })
//       )
//       .subscribe(
//         (newRating: number) => {
//           this.trainingsSchema.rating = newRating;
//         },
//         () => {
//           this.trainingsSchema.rating = 0;
//         }
//       );
// }
}
}
