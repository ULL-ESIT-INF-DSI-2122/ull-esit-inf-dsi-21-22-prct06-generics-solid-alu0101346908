

export interface Streamable<T> {
  addMedia(media: T): void;
  getMediaByName(name: string): T[];
  getMediaByYear(year: number): T[];
  getMediaByCE(CE: number): T[];
}

/**
 * Clase abstracta que modela una coleccion multimedia, contiene una lista donde se almacenan
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected media: T[]) {}
  /**
   * "Pusher" de un media a la coleccion
   * @param media Tipo T que se modela para un media
   */
  addMedia(media: T): void {
    this.media.push(media);
  }
  /**
   * Getter de la cantidad de multimedia en la coleccion
   * @returns Number con la cantidad de multimedia en la coleccion
   */
  getNumberOfMediaAvailable(): number {
    return this.media.length;
  }
  /**
   * Getter abstracto para la busqueda de un media por su nombre
   * @param name T que se modela para un media
   */
  abstract getMediaByName(name: string): T[];
  /**
   * Getter abstracto para la busqueda de un media por su año de emision
   * @param year T que se modela para un media
   */
  abstract getMediaByYear(year: number): T[];
  /**
   * Getter abstracto para la busqueda de un media por su calificacion de dedad
   * @param CE T que se modela para un media
   */
  abstract getMediaByCE(CE: number): T[];
}
