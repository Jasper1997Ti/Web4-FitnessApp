import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsSchema } from '../trainingsSchema.model';

@Component({
  selector: 'app-trainings-schema-detail',
  templateUrl: './trainings-schema-detail.component.html',
  styleUrls: ['./trainings-schema-detail.component.css']
})
export class TrainingsSchemaDetailComponent implements OnInit {
  public trainingsSchema: TrainingsSchema;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item => (this.trainingsSchema = item['trainingsSchema']));
  }

}
