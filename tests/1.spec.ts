import 'mocha';
import {expect} from 'chai';
import {Fighter, Pokemon, DragonBall, FateServant, ArknightOperator} from '../src/ejercicio-1/fighter';
import {Combat} from '../src/ejercicio-1/combat';


describe('Fighter subclasses tests', () => {
  const pokemon: Fighter = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  // eslint-disable-next-line max-len
  const goku: Fighter = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  // eslint-disable-next-line max-len
  const artoria: Fighter = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  // eslint-disable-next-line max-len
  const hellagur: Fighter = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
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

describe('Combat class tests', () => {
  const pokemon: Fighter = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  // eslint-disable-next-line max-len
  const goku: Fighter = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  const artoria: Fighter = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  // eslint-disable-next-line max-len
  const hellagur: Fighter = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
  const combat1: Combat = new Combat(goku, artoria);
  it('Debe existir un metodo para iniciar una pelea ', () => {
    expect(combat1.start()).to.exist;
  });
});

describe('Pokedex class tests', () => {
  const pokemon: Fighter = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  // eslint-disable-next-line max-len
  const goku: Fighter = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  const artoria: Fighter = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  const jeanneDArc: Fighter = new FateServant('Jeanne d\'Arc ', 44, 1.59, 'archer', [13523, 5460, 4215, 20270], 'Here we go!', 'Human');
  // eslint-disable-next-line max-len
  const hellagur: Fighter = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
  const pokedex: Pokedex = new Pokedex([pokemon, goku, artoria, hellagur]);
  it('Se debe poder añadir un Fighter a la pokedex y obtenerlo posteriormente con un id', () => {
    expect(pokedex.addFighter(jeanneDArc).getFighter(4)).to.deep.equal(jeanneDArc);
  });
});
