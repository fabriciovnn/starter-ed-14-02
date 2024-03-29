import { Criminal, Weapon } from "./";

export class Crime {
  constructor(
    private _id: string,
    private _description: string,
    private _crimeDate: Date,
    private _article: string,
    private _severity: number,
    private _victims: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _criminal: Criminal,
    private _weapon: Weapon,
    private _address?: string
  ) {}

  public toJSON() {
    return{
      id: this._id,
      description: this._description,
      crimeDate: this._crimeDate,
      victims: this._victims,
      criminal: this._criminal,
      weapon: this._weapon
    };
  }
}