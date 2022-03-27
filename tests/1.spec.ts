import 'mocha';
import {expect} from 'chai';
import {Fighter, Pokemon, DragonBall, FateServant, ArknightOperator} from '../src/ejercicio-1/fighter';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';

describe('Fighter subclasses tests', () => {
  const pokemon: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  // eslint-disable-next-line max-len
  const goku: DragonBall = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  // eslint-disable-next-line max-len
  const artoria: FateServant = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  // eslint-disable-next-line max-len
  const hellagur: ArknightOperator = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
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
  it('Getters basicos de Fighter ', () => {
    expect(artoria.getName()).to.be.eql(`Artoria Pendragon`);
    expect(artoria.getWeight()).to.be.eql(42);
    expect(artoria.getHeight()).to.be.eql(1.54);
    expect(artoria.getType()).to.be.eql(`saber`);
    expect(artoria.getStats()).to.be.eql([14418, 7560, 3009, 19506]);
    expect(artoria.getCatchPhrase()).to.be.eql(`All hands, prepare to charge!`);
    artoria.setHp(19505);
  });
});

describe('Pokemon subclass test', () => {
  const pokemon: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  it('Se debe poder obtener el universo del Pokemon ', () => {
    expect(pokemon.getUniverse()).to.equal(`Pertenezco al universo de Pokemon`);
  });
});

describe('DragonBall subclass test', () => {
  const goku: DragonBall = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  it('Se debe poder obtener el universo del luchador de DragonBall ', () => {
    expect(goku.getUniverse()).to.equal(`Pertenezco al universo de DragonBall`);
  });
  it('Se debe poder obtener la habilidad especial del luchador de DragonBall ', () => {
    expect(goku.getSpecialMove()).to.equal(`Kamehameha`);
  });
});

describe('FateServant subclass test', () => {
  const artoria: FateServant = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  it('Se debe poder obtener el universo del Servant ', () => {
    expect(artoria.getUniverse()).to.equal(`Pertenezco al universo de Fate`);
  });
  it('Se debe poder obtener el atributo del Servant ', () => {
    expect(artoria.getAttribute()).to.equal(`Earth`);
  });
});

describe('ArknightsOperator subclass test', () => {
  const hellagur: ArknightOperator = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
  it('Se debe poder obtener el universo del operador ', () => {
    expect(hellagur.getUniverse()).to.equal(`Pertenezco al universo de Arknights`);
  });
  it('Se debe poder obtener el coste de despligue de un operador de Arknights', () => {
    expect(hellagur.getDpCost()).to.equal(26);
  });
});

describe('Combat class tests', () => {
  const pokemon: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  const pokemon1: Pokemon = new Pokemon('Bulbasur', 6.9, 0.7, 'hierba', [49, 49, 45, 45], 'Bulb-bulb');
  const pokemon2: Pokemon = new Pokemon('Charmander', 8.5, 0.6, 'fuego', [52, 43, 65, 39], 'Char-char');
  const pokemon4: Pokemon = new Pokemon('Squirtle', 9, 0.5, 'agua', [48, 65, 43, 44], 'Squir!');
  // eslint-disable-next-line max-len
  const goku: DragonBall = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  const friza: DragonBall = new DragonBall('1st Form Frieza', 40, 1.35, 'mutant', [9720, 1800, 2000, 23880], 'Die Goku!', 'Death Ray!');
  // eslint-disable-next-line max-len
  const artoria: FateServant = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  const jeanneDArc: FateServant = new FateServant('Jeanne d\'Arc ', 44, 1.59, 'archer', [13523, 5460, 4215, 20270], 'Here we go!', 'Human');
  const percival: FateServant = new FateServant('Percival', 110, 1.95, 'lancer', [13033, 6507, 3230, 17260], 'O\' light of salvation.', 'Earth');
  const lancelot: FateServant = new FateServant('Lancelot', 42, 1.54, 'berserker', [14894, 7000, 3600, 14716], 'Hrrg!', 'Earth');
  // eslint-disable-next-line max-len
  const hellagur: ArknightOperator = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
  const exusiai: ArknightOperator = new ArknightOperator('Exusiai', 52, 1.59, 'sniper', [540, 161, 200, 1673], 'Rock n\' roll! ', 14);
  const ceobe: ArknightOperator = new ArknightOperator('Ceobe', 55, 1.53, 'caster', [667, 128, 160, 1565], 'Dadadadada!', 21);
  const aak: ArknightOperator = new ArknightOperator('Aak', 45, 1.61, 'specialist', [703, 152, 130, 2034], 'Time for a clinical test of my new meds.', 13);
  const combat1: Combat = new Combat(goku, artoria);
  const combat2: Combat = new Combat(pokemon, artoria);
  const combat3: Combat = new Combat(hellagur, artoria);
  const combat4: Combat = new Combat(jeanneDArc, artoria);
  const combat5: Combat = new Combat(percival, artoria);
  const combat6: Combat = new Combat(lancelot, artoria);
  const combat7: Combat = new Combat(percival, jeanneDArc);
  const combat8: Combat = new Combat(lancelot, jeanneDArc);
  const combat9: Combat = new Combat(lancelot, percival);
  const combat10: Combat = new Combat(jeanneDArc, artoria);
  const combat11: Combat = new Combat(percival, artoria);
  const combat12: Combat = new Combat(lancelot, artoria);
  const combat13: Combat = new Combat(percival, jeanneDArc);
  const combat14: Combat = new Combat(lancelot, jeanneDArc);
  const combat15: Combat = new Combat(pokemon1, pokemon);
  const combat16: Combat = new Combat(pokemon2, pokemon);
  const combat17: Combat = new Combat(pokemon4, pokemon);
  const combat18: Combat = new Combat(pokemon2, pokemon4);
  const combat19: Combat = new Combat(pokemon1, pokemon4);
  const combat20: Combat = new Combat(aak, ceobe);
  const combat21: Combat = new Combat(aak, exusiai);
  const combat22: Combat = new Combat(aak, hellagur);
  const combat23: Combat = new Combat(ceobe, exusiai);
  const combat24: Combat = new Combat(ceobe, hellagur);
  const combat25: Combat = new Combat(exusiai, hellagur);
  const combat26: Combat = new Combat(goku, pokemon);
  const combat27: Combat = new Combat(pokemon, hellagur);
  // vvvvvv DESHABILITAR ESTA LINEA PARA MOSTRAR POR PANTALLA EL COMBATE (HACE OVERFLOW DE LOS TESTS) vvvv
  console.log = function() {};
  // ^^^^^^ DESHABILITAR ESTA LINEA PARA MOSTRAR POR PANTALLA EL COMBATE (HACE OVERFLOW DE LOS TESTS) ^^^^
  it('Debe existir un metodo para iniciar una pelea ', () => {
    expect(combat1.start()).to.eql(2);
    expect(combat2.start()).to.eql(2);
    expect(combat3.start()).to.eql(2);
    expect(combat4.start()).to.eql(1);
    expect(combat5.start()).to.eql(1);
    expect(combat6.start()).to.eql(1);
    expect(combat7.start()).to.eql(1);
    expect(combat8.start()).to.eql(1);
    expect(combat9.start()).to.eql(2);
    expect(combat10.start()).to.eql(2);
    expect(combat11.start()).to.eql(1);
    expect(combat12.start()).to.eql(2);
    expect(combat13.start()).to.eql(1);
    expect(combat14.start()).to.eql(2);
    expect(combat15.start()).to.eql(1);
    expect(combat16.start()).to.eql(1);
    expect(combat17.start()).to.eql(1);
    expect(combat18.start()).to.eql(2);
    expect(combat19.start()).to.eql(1);
    expect(combat20.start()).to.eql(1);
    expect(combat21.start()).to.eql(1);
    expect(combat22.start()).to.eql(1);
    expect(combat23.start()).to.eql(2);
    expect(combat24.start()).to.eql(2);
    expect(combat25.start()).to.eql(2);
    expect(combat26.start()).to.eql(2);
    expect(combat27.start()).to.eql(2);
  });
});

describe('Pokedex class tests', () => {
  const pokemon: Pokemon = new Pokemon('Pikachu', 6, 0.4, 'electrico', [55, 40, 90, 35], 'Pi-kaPika');
  // eslint-disable-next-line max-len
  const goku: DragonBall = new DragonBall('Son Goku', 62, 1.75, 'saiyan', [9560, 2279, 1500, 26270], 'It\'s over!', 'Kamehameha');
  // eslint-disable-next-line max-len
  const artoria: FateServant = new FateServant('Artoria Pendragon', 42, 1.54, 'saber', [14418, 7560, 3009, 19506], 'All hands, prepare to charge!', 'Earth');
  // eslint-disable-next-line max-len
  const jeanneDArc: FateServant = new FateServant('Jeanne d\'Arc ', 44, 1.59, 'archer', [13523, 5460, 4215, 20270], 'Here we go!', 'Human');
  // eslint-disable-next-line max-len
  const hellagur: ArknightOperator = new ArknightOperator('Helage', 85, 1.93, 'guard', [762, 334, 120, 3825], 'All hands, prepare to charge!', 26);
  const pokedex: Pokedex = new Pokedex([pokemon, goku, artoria, hellagur]);
  it('Se debe poder añadir un Fighter a la pokedex y obtenerlo posteriormente con un id', () => {
    expect(pokedex.addFighter(jeanneDArc)).to.be.true;
    expect(pokedex.getFighter(4)).to.deep.equal(jeanneDArc);
  });
  it('Utilizar el getter con un id no existente deberia retornar undefined', () => {
    expect(pokedex.getFighter(200)).to.deep.equal(undefined);
  });
});
