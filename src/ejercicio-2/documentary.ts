

export class Documentary {
  constructor(private name: string, private date: number, private lenght: number, private director: string) {
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
  getDirector(): string {
    return this.director;
  }
}
