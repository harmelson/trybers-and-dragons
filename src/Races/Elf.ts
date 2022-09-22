import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _qnt = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._qnt += 1;
  }

  static createdRacesInstances(): number { return Elf._qnt; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}