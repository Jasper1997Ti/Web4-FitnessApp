export class Exercise {
    constructor(
      private _name: string,
      private _sets: number,
      private _reps: number
    ) {}
  
    static fromJSON(json: any): Exercise {
      const ex = new Exercise(json.name, json.sets, json.reps);
      return ex;
    }
    toJSON(): any {
      return { name: this.name, sets: this.sets, reps: this.reps };
    }
  
    get name() {
      return this._name;
    }
    get sets() {
      return this._sets;
    }
    get reps() {
      return this._reps;
    }
  }