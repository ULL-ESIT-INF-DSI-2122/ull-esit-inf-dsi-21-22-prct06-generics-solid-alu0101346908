import {Streamable, BasicStreamableCollection} from './streamable';
import {Movie} from './movie';
import {Serie} from './serie';
import {Documentary} from './documentary';

/**
 * Clase que modela una coleccion de peliculas extendiendo la clase BasicStreamableCollection<Movie>
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
  constructor(private movies: Movie[]) {
    super(movies);
  }
  /**
   * Getter que filtra una pelicula de la lista por el nombre
   * @param name Nombre a ser usado para buscar la pelicula
   * @returns Array con las peliculas que coinciden con el criterio de busqueda
   */
  getMediaByName(name: string): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra una pelicula de la lista por el año de emision
  * @param year Año a ser usado para filtrar las peliculas
  * @returns Array con las peliculas que coinciden con el criterio de busqueda
  */
  getMediaByYear(year: number): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra una pelicula de la lista por su duracion
  * @param lenght Duracion de la pelicula a ser usado para la busqueda
  * @returns Array con las peliculas que coinciden con el criterio de busqueda
  */
  getMediaByLenght(lenght: number): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getLenght() === lenght) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra las peliculas por su genero
   * @param genre Nombre del genero a ser buscado en las peliculas
   * @returns Array con las peliculas que coinciden con el criterio de busqueda
   */
  getMediaByGenre(genre: string): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      for (let i = 0; i < value.getGenres().length; i++) {
        if (value.getGenres()[i].search(genre) != -1) {
          resultList.push(value);
        }
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra las peliculas por su calificacion de edad
   * @param CE Number de la edad minima que se quiere buscar peliculas
   * @returns Array con las peliculas que coinciden con el criterio de busqueda
   */
  getMediaByCE(CE: number): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getCE() <= CE) {
        resultList.push(value);
      }
    });
    return resultList;
  }
}

/**
 * Clase que modela una coleccion de series extendiendo la clase BasicStreamableCollection<Serie>
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(private series: Serie[]) {
    super(series);
  }
  /**
   * Getter que filtra una series de la lista por el nombre
   * @param name Nombre a ser usado para buscar la series
   * @returns Array con las series que coinciden con el criterio de busqueda
   */
  getMediaByName(name: string): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra una serie de la lista por el año de emision
  * @param year Año a ser usado para filtrar la serie
  * @returns Array con las series que coinciden con el criterio de busqueda
  */
  getMediaByYear(year: number): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra una serie por el numero de episodios
   * @param number Numero de episodios para filtrar la serie
   * @returns Array con las series que cumplen el criterio de busqueda
   */
  getMediaByEpisodes(number: number): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getEpisodesNumber() === number) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra las series por su genero
  * @param genre Nombre del genero a ser buscado en las series
  * @returns Array con las series que coinciden con el criterio de busqueda
  */
  getMediaByGenre(genre: string): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      for (let i = 0; i < value.getGenres().length; i++) {
        if (value.getGenres()[i].search(genre) != -1) {
          resultList.push(value);
        }
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra las series por su calificacion de edad
   * @param CE Number de la edad minima que se quiere buscar series
   * @returns Array con las series que coinciden con el criterio de busqueda
   */
  getMediaByCE(CE: number): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getCE() <= CE) {
        resultList.push(value);
      }
    });
    return resultList;
  }
}
/**
 * Clase que modela una coleccion de Documentales extendiendo la clase BasicStreamableCollection<Documentary>
 */
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  constructor(private documentaries: Documentary[]) {
    super(documentaries);
  }
  /**
   * Getter que filtra un documental de la lista por el nombre
   * @param name Nombre a ser usado para buscar los documentales
   * @returns Array con los documentales que coinciden con el criterio de busqueda
   */
  getMediaByName(name: string): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra un documental de la lista por el año de emision
  * @param year Año a ser usado para filtrar los documentales
  * @returns Array con los documental que coinciden con el criterio de busqueda
  */
  getMediaByYear(year: number): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
  * Getter que filtra un documental de la lista por su duracion
  * @param lenght Duracion del documental a ser usado para la busqueda
  * @returns Array con los documental que coinciden con el criterio de busqueda
  */
  getMediaByLenght(lenght: number): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getLenght() === lenght) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra un documental de la lista por su director
   * @param director Nombre del director a filtrar documentales
   * @returns Array de documentales que cumplen el criterio de busqueda
   */
  getMediaByDirector(director: string): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getDirector() === director) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  /**
   * Getter que filtra los documentales por su calificacion de edad
   * @param CE Number de la edad minima que se quiere buscar los documentales
   * @returns Array con los documentales que coinciden con el criterio de busqueda
   */
  getMediaByCE(CE: number): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getCE() <= CE) {
        resultList.push(value);
      }
    });
    return resultList;
  }
}
