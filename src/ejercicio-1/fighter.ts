// Pokemon https://pokemondb.net/pokedex/all
// DragonBall https://legends.dbz.space/characters/stats
// FateServant https://fategrandorder.fandom.com/wiki/Servant_List
// ArknightOperator https://arknights.fandom.com/wiki/Operator/List
export enum statsIndex {ataque = 0, defensa, velocidad, hp }

export type Stats = [number, number, number, number];

/**
 * Clase abstracta fighter que modela un luchador de cualquier universo, contiene atributos basicos
 */
export abstract class Fighter {
  constructor(private name: string, private weight: number,
  private height: number, private type: string, private stats: Stats, private catchphrase: string) {
  }
  /**
   * Las clases que expandan Fighter deberan tener el getter del universo
   */
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
  /**
   * Setter de la vida del luchador
   * @param hp Puntos de vida a settear
   */
  setHp(hp:number) {
    this.stats[statsIndex.hp] = hp;
  }
  /**
   * Getter del catchphrase
   * @returns Devuelve la string que contiene el catchphrase del luchador
   */
  getCatchPhrase(): string {
    return this.catchphrase;
  }
}
/**
 * Clase Pokemon que extiende a luchador, utiliza los valores de su super y define el getUniverse()
 */
export class Pokemon extends Fighter {
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string) {
    super(name, weight, height, type, stats, catchphrase);
  }
  /**
   * Getter del universo del Fighter
   * @returns Devuelve el string que identifica el universo del luchador
   */
  getUniverse(): string {
    return `Pertenezco al universo de Pokemon`;
  }
}
/**
 * Clase que extiende a Fighter y modela un personaje del mundo de DB
 */
export class DragonBall extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private specialMove: string) {
    super(name, weight, height, type, stats, catchphrase);
  }
  /**
   * Getter que devuelve el ataque especial del personaje de DB
   * @returns Devuelve un string que identifica el ataque especial del personaje de DB
   */
  getSpecialMove(): string {
    return this.specialMove;
  }
  /**
   * Getter del universo del Fighter
   * @returns Devuelve el string que identifica el universo del luchador
   */
  getUniverse(): string {
    return `Pertenezco al universo de DragonBall`;
  }
}
/**
 * Clase que extiende a Fighter y modela un personaje del mundo de Fate
 */
export class FateServant extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private attribute: string) {
    super(name, weight, height, type, stats, catchphrase);
  }
  /**
   * Getter del atributo especial de un personaje del universo de Fate
   * @returns Devuelve el string que identifica el atributo especial de un servant de Fate
   */
  getAttribute(): string {
    return this.attribute;
  }
  /**
   * Getter del universo del Fighter
   * @returns Devuelve el string que identifica el universo del luchador
   */
  getUniverse(): string {
    return `Pertenezco al universo de Fate`;
  }
}
/**
 * Clase que extiende Fighter y modela un personaje del universo de Arknights, tiene un parametro unico que es el costes
 * de despliegue
 */
export class ArknightOperator extends Fighter {
  // eslint-disable-next-line max-len
  constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private dp: number) {
    super(name, weight, height, type, stats, catchphrase);
  }
  /**
   * Getter de los costes de despligue del operador
   * @returns Devuelve el coste de despliegue del operador
   */
  getDpCost(): number {
    return this.dp;
  }
  /**
 * Getter del universo del Fighter
 * @returns Devuelve el string que identifica el universo del luchador
 */
  getUniverse(): string {
    return `Pertenezco al universo de Arknights`;
  }
}

