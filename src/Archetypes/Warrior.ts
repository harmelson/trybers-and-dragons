import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _type: EnergyType;
  private static _qnt = 0;
  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior._qnt += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._qnt;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}