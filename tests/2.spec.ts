import 'mocha';
import {expect} from 'chai';
import {Streamable, BasicStreamableCollection} from '../src/ejercicio-2/stremeable';
import {MoviesCollection, SeriesCollection, DocumentariesCollection} from '../src/ejercicio-2/mediaCollections';
import {Movie} from '../src/ejercicio-2/movie';
import {Serie} from '../src/ejercicio-2/serie';
import {Documentary} from '../src/ejercicio-2/documentary';


describe('Media classes tests', () => {
  const movie1: Movie = new Movie(`Interstellar`, 2014, 169, `sci-fi, drama`);
  const serie1: Serie = new Serie(`Demon Slayer`, 2019, 44, `action, fantasy, animation`);
  const documentary1: Documentary = new Documentary(`Human`, 2015, 188, `Yann Arthus-Bertrand`);
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