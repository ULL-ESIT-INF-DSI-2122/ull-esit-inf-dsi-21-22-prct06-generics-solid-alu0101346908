
/**
 * Clase Movie que modela un producto multimedia que es el de las peliculas
 */
export class Movie {
  constructor(private name: string, private date: number, private lenght: number, private genres: string[], private CE: number) {
  }
  /**
  * Getter del nombre de la pelicula
  * @returns String con el nombre de la pelicula
  */
  getName(): string {
    return this.name;
  }
  /**
  * Getter del año de emision de la pelicula
  * @returns Number que representa el año de emision
  */
  getDate(): number {
    return this.date;
  }
  /**
  * Getter de la duracion de la pelicula
  * @returns Number con la duracion de la pelicula en minutos
  */
  getLenght(): number {
    return this.lenght;
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
