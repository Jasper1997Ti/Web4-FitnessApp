import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/dialog/confirmation-dialog/confirmation-dialog.component';
import { TrainingsSchemaDataService } from '../trainings-schema-data.service';
import { TrainingsSchema } from '../trainingsSchema.model';

// function validateExerciseName(control: FormGroup) : { [key: string]: any } {
//   if (
//     control.get('sets').value.length >= 1 &&
//     control.get('name').value.length < 2
//   ) {
//     return { setsNoName: true };
//   }
//   return null;
// }

@Component({
  selector: 'app-trainings-schema-detail',
  templateUrl: './trainings-schema-detail.component.html',
  styleUrls: ['./trainings-schema-detail.component.css']
})
export class TrainingsSchemaDetailComponent implements OnInit {
  public trainingsSchema: TrainingsSchema;
  title = 'angular-confirmation-dialog';
  // likes: any =  10;

  constructor(private route: ActivatedRoute,private _trainingsSchemaDataService : TrainingsSchemaDataService, public dialog: MatDialog,private _router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => (this.trainingsSchema = item['trainingsSchema']));

    // this.pusherService.channel.bind('new-like', data => {
    //   this.likes = data.likes ;
    // });
  }

  deleteTrainingsSchema(){
    this._trainingsSchemaDataService.deleteTrainingsSchema(this.trainingsSchema).subscribe(
      () => console.log('Trainingsschema deleted'), (err) => console.log(err)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this trainingsschema"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.deleteTrainingsSchema();
        this.returnToList();
      }
    });
  }

  returnToList(){
    this._router.navigate(['/trainingsschema/list']);
  }

  // liked() {
  //   this.likes = parseInt(this.likes, 10) + 1;
  //   this.pusherService.like( this.likes );
  // }



}
