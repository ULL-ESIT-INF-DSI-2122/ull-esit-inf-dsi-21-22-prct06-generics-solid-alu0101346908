import {Streamable, BasicStreamableCollection} from './streamable';
import {Movie} from './movie';
import {Serie} from './serie';
import {Documentary} from './documentary';

export class MoviesCollection extends BasicStreamableCollection<Movie> {
  constructor(private movies: Movie[]) {
    super(movies);
  }
  getMediaByName(name: string): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByYear(year: number): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByLenght(lenght: number): Movie[] {
    let resultList: Movie[] = [];
    this.movies.forEach((value) => {
      if (value.getLenght() === lenght) {
        resultList.push(value);
      }
    });
    return resultList;
  }
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


export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(private series: Serie[]) {
    super(series);
  }
  getMediaByName(name: string): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByYear(year: number): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByEpisodes(number: number): Serie[] {
    let resultList: Serie[] = [];
    this.series.forEach((value) => {
      if (value.getEpisodesNumber() === number) {
        resultList.push(value);
      }
    });
    return resultList;
  }
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

export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  constructor(private documentaries: Documentary[]) {
    super(documentaries);
  }
  getMediaByName(name: string): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getName().search(name) != -1) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByYear(year: number): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getDate() === year) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByLenght(lenght: number): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getLenght() === lenght) {
        resultList.push(value);
      }
    });
    return resultList;
  }
  getMediaByDirector(director: string): Documentary[] {
    let resultList: Documentary[] = [];
    this.documentaries.forEach((value) => {
      if (value.getDirector() === director) {
        resultList.push(value);
      }
    });
    return resultList;
  }
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
