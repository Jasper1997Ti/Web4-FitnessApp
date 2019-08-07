import { Pipe, PipeTransform } from '@angular/core';
import { TrainingsSchema } from './trainingsSchema.model';

@Pipe({
  name: 'trainingsSchemaFilter'
})
export class TrainingsSchemaFilterPipe implements PipeTransform {

  transform(trainingsSchemas: TrainingsSchema[], name: String): TrainingsSchema[] {
    if (!name || name.length === 0) {
      return trainingsSchemas;
    }
    return trainingsSchemas.filter(ts =>
      ts.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }

}
