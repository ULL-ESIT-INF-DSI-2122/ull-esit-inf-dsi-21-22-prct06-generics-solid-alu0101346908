

export class Serie {
  constructor(private name: string, private date: number, private episodes: number, private genres: string[]) {
  }
  getName(): string {
    return this.name;
  }
  getDate(): number {
    return this.date;
  }
  getEpisodes(): number {
    return this.episodes;
  }
  getGenres(): string[] {
    return this.genres;
  }
}
