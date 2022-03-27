

export class Movie {
  constructor(private name: string, private date: number, private lenght: number, private genres: string[], private CE: number) {
  }
  getName(): string {
    return this.name;
  }
  getDate(): number {
    return this.date;
  }
  getLenght(): number {
    return this.lenght;
  }
  getGenres(): string[] {
    return this.genres;
  }
  getCE(): number {
    return this.CE;
  }
}
