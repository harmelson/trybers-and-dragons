import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _qnt = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._qnt += 1;
  }

  static createdRacesInstances(): number { return Dwarf._qnt; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}