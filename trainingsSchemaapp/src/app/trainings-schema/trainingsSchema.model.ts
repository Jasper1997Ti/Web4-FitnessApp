import { Exercise } from './exercise.model';

export class TrainingsSchema {
private _id: number;
private _rating: number;

    constructor(
      private _name: string,
      private _categorie : string,
      private _created = new Date(),
      private _exercises = new Array<Exercise>()
           
    ) {}

    static fromJSON(json: any): TrainingsSchema {
        const rec = new TrainingsSchema(json.name, json.categorie, json.created,json.exercises.map(Exercise.fromJSON));
        rec._id = json.id;
        return rec;
      }
      toJSON(): any {
        return {
          id : this._id,
          name: this.name,
          categorie: this.categorie,
          exercises: this.exercises.map(ex => ex.toJSON()),
          created : this._created
          
        };
      }

      get id(): number {
        return this._id;
      }

    get categorie(): string {
        return this._categorie
    }

    set categorie(newCategorie: string) {
      this._categorie = newCategorie;
    }

    get created(): Date {
      return this._created;
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

    get rating() {
      return this._rating;
    }
    set rating(newRating: number) {
      this._rating = newRating;
    }
  }