

export class Serie {
  constructor(private name: string, private date: number, private episodes: number, private genres: string[], private CE: number) {
  }
  getName(): string {
    return this.name;
  }
  getDate(): number {
    return this.date;
  }
  getEpisodesNumber(): number {
    return this.episodes;
  }
  getGenres(): string[] {
    return this.genres;
  }
  getCE(): number {
    return this.CE;
  }
}
