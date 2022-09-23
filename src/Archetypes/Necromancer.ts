import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _type: EnergyType;
  private static _qnt = 0;
  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer._qnt += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._qnt;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}