
export enum statsIndex {ataque = 0, defensa, velocidad, hp }

export type Stats = [number, number, number, number];


export abstract class Fighter {
  constructor(private name: string, private weight: number,
  private height: number, private type: string, private stats: Stats, private catchphrase: string) {
  }

  abstract getUniverse(): string;
  /**
   *
   * @returns Devuelve el nombre del luchador
   */
  getName(): string {
    return this.name;
  }
  /**
   *
   * @returns Devuelve el peso del luchador
   */
  getWeight(): number {
    return this.weight;
  }
  /**
   *
   * @returns Devuelve la altura del luchador
   */
  getHeight(): number {
    return this.height;
  }
  /**
   *
   * @returns Devuelve el tipo del luchador
   */
  getType(): string {
    return this.type;
  }
  /**
   *
   * @returns Devuelve el array de Stats
   */
  getStats(): Stats {
    return this.stats;
  }
  setHp(hp:number) {
    this.stats[statsIndex.hp] = hp;
  }

  getCatchPhrase(): string {
    return this.catchphrase;
  }
}

export class Pokemon extends Fighter {
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string) {
    super(name, weight, height, type, stats, catchphrase);
  }

  getUniverse(): string {
    return `Pertenezco al universo de Pokemon`;
  }
}
export class DragonBall extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private specialMove: string) {
    super(name, weight, height, type, stats, catchphrase);
  }
  getSpecialMove(): string {
    return this.specialMove;
  }
  getUniverse(): string {
    return `Pertenezco al universo de DragonBall`;
  }
}

export class FateServant extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private attribute: string) {
    super(name, weight, height, type, stats, catchphrase);
  }
  getAttribute(): string {
    return this.attribute;
  }

  getUniverse(): string {
    return `Pertenezco al universo de Fate`;
  }
}

export class ArknightOperator extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private dp: number) {
    super(name, weight, height, type, stats, catchphrase);
  }
  getDpCost(): number {
    return this.dp;
  }
  getUniverse(): string {
    return `Pertenezco al universo de Arknights`;
  }
}

