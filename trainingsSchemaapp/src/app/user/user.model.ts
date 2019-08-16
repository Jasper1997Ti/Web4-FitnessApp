export class User {

        constructor(
          private _firstName: string,
          private _lastName : string,
          private _email : string,
          private _trainingsSchemas = new Array<string>()
               
        ) {}
    
        static fromJSON(json: any): User {
            const rec = new User(json.firstName, json.lastName, json.email,json.trainingsSchemas);
            return rec;
          }
        
    
        get firstName(): string {
            return this._firstName
        }
    
        get lastName(): string {
          return this._lastName;
        }
        get email(): string {
            return this._email
        }
    
        get trainingsSchemas(): string[] {
          return this._trainingsSchemas;
        }
    }
       