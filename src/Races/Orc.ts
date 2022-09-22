import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _qnt = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._qnt += 1;
  }

  static createdRacesInstances(): number { return Orc._qnt; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}