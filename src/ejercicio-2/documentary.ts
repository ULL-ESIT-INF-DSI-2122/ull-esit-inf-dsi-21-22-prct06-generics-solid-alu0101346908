
/**
 * Clase Documentary que modela un producto multimedia que es el de los documentales
 */
export class Documentary {
  constructor(private name: string, private date: number, private lenght: number, private director: string, private CE: number) {
  }
  /**
  * Getter del nombre del documental
  * @returns String con el nombre del documental
  */
  getName(): string {
    return this.name;
  }
  /**
   * Getter del año de emision del documental
   * @returns Number que representa el año de emision
   */
  getDate(): number {
    return this.date;
  }
  /**
   * Getter de la duracion del documental
   * @returns Number con la duracion del documental en minutos
   */
  getLenght(): number {
    return this.lenght;
  }
  /**
   * Getter del director del documental
   * @returns String con el nombre del documental
   */
  getDirector(): string {
    return this.director;
  }
  /**
  * Getter de la clasificacion de edad
  * @returns Number con la edad recomendada minima
  */
  getCE(): number {
    return this.CE;
  }
}
