import { TrainingsSchema } from './trainingsSchema.model';

const JsonTrainingsSchema = [
  {
    name: 'bulk',
    exercises: ['db Chest', 'flyes'],
    dateAdded: new Date(2019, 2, 3)
  },
  {
    name: 'cut',
    exercises: ['cable flyes', 'push ups'],
    dateAdded: new Date(2019, 2, 5)
  }
];
export const TRAININGSSCHEMAS: TrainingsSchema[] = JsonTrainingsSchema.map(TrainingsSchema.fromJSON);