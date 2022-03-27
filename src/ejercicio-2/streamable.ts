

export interface Streamable<T> {
  addMedia(media: T): void;
  getMediaByName(name: string): T[];
  getMediaByYear(year: number): T[];
  getMediaByCE(CE: number): T[];
}


export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected media: T[]) {}
  addMedia(media: T): void {
    this.media.push(media);
  }
  getNumberOfMediaAvailable(): number {
    return this.media.length;
  }
  abstract getMediaByName(name: string): T[];
  abstract getMediaByYear(year: number): T[];
  abstract getMediaByCE(CE: number): T[];
}
