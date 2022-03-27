import 'mocha';
import {expect} from 'chai';
import {Streamable, BasicStreamableCollection} from '../src/ejercicio-2/streamable';
import {MoviesCollection, SeriesCollection, DocumentariesCollection} from '../src/ejercicio-2/mediaCollections';
import {Movie} from '../src/ejercicio-2/movie';
import {Serie} from '../src/ejercicio-2/serie';
import {Documentary} from '../src/ejercicio-2/documentary';


describe('Media classes tests', () => {
  const movie1: Movie = new Movie(`Interstellar`, 2014, 169, [`sci-fi`, `drama`], 13);
  const serie1: Serie = new Serie(`Demon Slayer`, 2019, 44, [`action, fantasy, animation`], 16);
  const documentary1: Documentary = new Documentary(`Human`, 2015, 188, `Yann Arthus-Bertrand`, 12);
  it('movie debe ser un objecto de Movie', () => {
    expect(movie1 instanceof Movie).to.be.true;
  });
  it('serie debe ser un objecto de Serie', () => {
    expect(serie1 instanceof Serie).to.be.true;
  });
  it('documentary deber ser un objeto de Documentary', () => {
    expect(documentary1 instanceof Documentary).to.be.true;
  });
});

describe('BasicStreamableCollection subclasses tests', () => {
  const movie1: Movie = new Movie(`Interstellar`, 2014, 169, [`sci-fi`, `drama`], 13);
  const serie1: Serie = new Serie(`Demon Slayer`, 2019, 44, [`action, fantasy, animation`], 16);
  const documentary1: Documentary = new Documentary(`Human`, 2015, 188, `Yann Arthus-Bertrand`, 12);
  const movie2: Movie = new Movie(`Interstellar 2`, 2015, 169, [`sci-fi`, `drama`], 13);
  const serie2: Serie = new Serie(`Demon Slayer 2`, 2020, 44, [`action, fantasy, animation`], 16);
  const documentary2: Documentary = new Documentary(`Human 2`, 2016, 188, `Yann Arthus-Bertrand`, 12);
  const moviescollection: BasicStreamableCollection<Movie> = new MoviesCollection([movie1]);
  const seriescollection: BasicStreamableCollection<Serie> = new SeriesCollection([serie1]);
  const documentariescollection: BasicStreamableCollection<Documentary> = new DocumentariesCollection([documentary1]);
  it('MovieCollection es un BasicStreamableCollection', () => {
    expect(moviescollection instanceof BasicStreamableCollection).to.be.true;
  });
  it('SeriesCollection es un BasicStreamableCollection', () => {
    expect(seriescollection instanceof BasicStreamableCollection).to.be.true;
  });
  it('DocumentaryCollection es un BasicStreamableCollection', () => {
    expect(documentariescollection instanceof BasicStreamableCollection).to.be.true;
  });
  it('Se debe poder añadir una pelicula a un MoviesCollection', () => {
    moviescollection.addMedia(movie2);
    expect(moviescollection.getNumberOfMediaAvailable()).to.eql(2);
  });
  it('Se debe poder añadir una serie a un SeriesCollection', () => {
    seriescollection.addMedia(serie2);
    expect(seriescollection.getNumberOfMediaAvailable()).to.eql(2);
  });
  it('Se debe poder añadir un documental a un DocumentariesCollection', () => {
    documentariescollection.addMedia(documentary2);
    expect(documentariescollection.getNumberOfMediaAvailable()).to.eql(2);
  });
});


describe('Media classes tests', () => {
  const movie1: Movie = new Movie(`Interstellar`, 2014, 169, [`sci-fi`, `drama`], 13);
  const serie1: Serie = new Serie(`Demon Slayer`, 2019, 44, [`action, fantasy, animation`], 16);
  const documentary1: Documentary = new Documentary(`Human`, 2015, 188, `Yann Arthus-Bertrand`, 12);
  it('Getters de Movie', () => {
    expect(movie1.getName()).to.be.equal(`Interstellar`);
    expect(movie1.getDate()).to.be.equal(2014);
    expect(movie1.getLenght()).to.be.equal(169);
    expect(movie1.getGenres()).to.deep.equal([`sci-fi`, `drama`]);
    expect(movie1.getCE()).to.be.equal(13);
  });
  it('Getters de Serie', () => {
    expect(serie1.getName()).to.be.equal(`Demon Slayer`);
    expect(serie1.getDate()).to.be.equal(2019);
    expect(serie1.getEpisodesNumber()).to.be.equal(44);
    expect(serie1.getGenres()).to.deep.equal([`action, fantasy, animation`]);
    expect(serie1.getCE()).to.be.equal(16);
  });
  it('Getters de Documentary', () => {
    expect(documentary1.getName()).to.be.equal(`Human`);
    expect(documentary1.getDate()).to.be.equal(2015);
    expect(documentary1.getLenght()).to.be.equal(188);
    expect(documentary1.getDirector()).to.be.equal(`Yann Arthus-Bertrand`);
    expect(documentary1.getCE()).to.be.equal(12);
  });
});


describe('MovieCollection class tests', () => {
  const movie1: Movie = new Movie(`Interstellar`, 2014, 169, [`sci-fi`, `drama`], 13);
  const moviescollection: MoviesCollection = new MoviesCollection([movie1]);
  it('Getters filtrantes de MovieCollection', () => {
    expect(moviescollection.getMediaByName(`Interstellar`)).to.deep.equal([movie1]);
    expect(moviescollection.getMediaByName(`x`)).to.deep.equal([]);

    expect(moviescollection.getMediaByYear(2014)).to.deep.equal([movie1]);
    expect(moviescollection.getMediaByYear(2020)).to.deep.equal([]);

    expect(moviescollection.getMediaByLenght(169)).to.deep.equal([movie1]);
    expect(moviescollection.getMediaByLenght(0)).to.deep.equal([]);

    expect(moviescollection.getMediaByGenre(`sci-fi`)).to.deep.equal([movie1]);
    expect(moviescollection.getMediaByGenre(`sports`)).to.deep.equal([]);

    expect(moviescollection.getMediaByCE(13)).to.deep.equal([movie1]);
    expect(moviescollection.getMediaByCE(0)).to.deep.equal([]);
  });
});

describe('SeriesCollection class tests', () => {
  const serie1: Serie = new Serie(`Demon Slayer`, 2019, 44, [`action, fantasy, animation`], 16);
  const seriescollection: SeriesCollection = new SeriesCollection([serie1]);
  it('Getters filtrantes de MovieCollection', () => {
    expect(seriescollection.getMediaByName(`Demon Slayer`)).to.deep.equal([serie1]);
    expect(seriescollection.getMediaByName(`Angel`)).to.deep.equal([]);

    expect(seriescollection.getMediaByYear(2019)).to.deep.equal([serie1]);
    expect(seriescollection.getMediaByYear(2020)).to.deep.equal([]);

    expect(seriescollection.getMediaByEpisodes(44)).to.deep.equal([serie1]);
    expect(seriescollection.getMediaByEpisodes(1)).to.deep.equal([]);

    expect(seriescollection.getMediaByGenre(`fantasy`)).to.deep.equal([serie1]);
    expect(seriescollection.getMediaByGenre(`sci-fi`)).to.deep.equal([]);

    expect(seriescollection.getMediaByCE(16)).to.deep.equal([serie1]);
    expect(seriescollection.getMediaByCE(1)).to.deep.equal([]);
  });
});

describe('DocumentaryCollection class tests', () => {
  const documentary1: Documentary = new Documentary(`Human`, 2015, 188, `Yann Arthus-Bertrand`, 12);
  const documentariescollection: DocumentariesCollection = new DocumentariesCollection([documentary1]);
  it('Getters filtrantes de MovieCollection', () => {
    expect(documentariescollection.getMediaByName(`Human`)).to.deep.equal([documentary1]);
    expect(documentariescollection.getMediaByName(`Robot`)).to.deep.equal([]);

    expect(documentariescollection.getMediaByYear(2015)).to.deep.equal([documentary1]);
    expect(documentariescollection.getMediaByYear(2030)).to.deep.equal([]);

    expect(documentariescollection.getMediaByLenght(188)).to.deep.equal([documentary1]);
    expect(documentariescollection.getMediaByLenght(80)).to.deep.equal([]);

    expect(documentariescollection.getMediaByDirector(`Yann Arthus-Bertrand`)).to.deep.equal([documentary1]);
    expect(documentariescollection.getMediaByDirector(`Eterio Ortega`)).to.deep.equal([]);

    expect(documentariescollection.getMediaByCE(12)).to.deep.equal([documentary1]);
    expect(documentariescollection.getMediaByCE(5)).to.deep.equal([]);
  });
});
