import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private random = () => Math.floor(Math.random() * 10) + 1;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = this.random();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this.race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = this.random();
    this._defense = this.random();
    this._energy = { type_: this.archetype.energyType, amount: this.random() };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { 
    return { 
      type_: this._energy.type_, amount: this._energy.amount,
    }; 
  }

  receiveDamage(attackPoints: number): number { 
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += this.random();
    this._strength += this.random();
    this._dexterity += this.random();
    this._defense += this.random();
    this._energy.amount = 10;
    if (this._maxLifePoints >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}