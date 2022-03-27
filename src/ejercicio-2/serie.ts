
/**
 * Clase Serie que modela un producto multimedia que es el de las series
 */
export class Serie {
  constructor(private name: string, private date: number, private episodes: number, private genres: string[], private CE: number) {
  }
  /**
  * Getter del nombre de la serie
  * @returns String con el nombre de la serie
  */
  getName(): string {
    return this.name;
  }
  /**
  * Getter del año de emision de la serie
  * @returns Number que representa el año de la serie
  */
  getDate(): number {
    return this.date;
  }
  /**
  * Getter del numero de episodios de la serie
  * @returns Number de episodios de la serie
  */
  getEpisodesNumber(): number {
    return this.episodes;
  }
  /**
  * Getter de los generos de la pelicula
  * @returns Array de strings con los generos de la pelicula
  */
  getGenres(): string[] {
    return this.genres;
  }
  /**
  * Getter de la clasificacion de edad
  * @returns Number con la edad recomendada minima
  */
  getCE(): number {
    return this.CE;
  }
}
