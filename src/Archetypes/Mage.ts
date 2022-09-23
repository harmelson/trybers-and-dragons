import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _type: EnergyType;
  private static _qnt = 0;
  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage._qnt += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._qnt;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}