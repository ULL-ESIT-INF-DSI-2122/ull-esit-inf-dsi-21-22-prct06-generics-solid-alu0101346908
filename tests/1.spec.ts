import 'mocha';
import {expect} from 'chai';
import {Fighter} from './fighter';


describe('Fighter subclasses tests', () => {
  const pokemon: Fighter = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  const goku: Fighter = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'Kamehameha!');
  const artoria: Fighter = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!');
  const hellagur: Fighter = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!');
  it('Un pokemon es un Fighter', () => {
    expect(pokemon instanceof Fighter).to.be.true;
  });
  it('Un personaje de Dragon Ball es un Fighter ', () => {
    expect(goku instanceof Fighter).to.be.true;
  });
  it('Un personaje de Fate es un Fighter ', () => {
    expect(artoria instanceof Fighter).to.be.true;
  });
  it('Un personaje de Arknight es un Fighter ', () => {
    expect(hellagur instanceof Fighter).to.be.true;
  });
});
