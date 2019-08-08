import { Exercise } from './exercise.model';

export class TrainingsSchema {
    constructor(
      private _name: string,
      private _categorie : string,
      private _exercises = new Array<Exercise>()      
    ) {}

    static fromJSON(json: any): TrainingsSchema {
        const rec = new TrainingsSchema(json.name, json.categorie,json.exercises.map(Exercise.fromJSON));
        return rec;
      }
      toJSON(): any {
        return {
          name: this.name,
          exercises: this.exercises.map(ex => ex.toJSON()),
          categorie: this.categorie
        };
      }

    get categorie(): string {
        return this._categorie
    }
    get exercises(): Exercise[] {
        return this._exercises
    }
    get name(): string {
      return this._name;
    }
   
    addExercise(name: string, sets: number, reps: number) {
      this._exercises.push(new Exercise(name, sets, reps));
    }
  }