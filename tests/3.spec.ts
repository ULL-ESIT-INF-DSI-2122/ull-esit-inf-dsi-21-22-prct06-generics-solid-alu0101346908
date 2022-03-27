import 'mocha';
import {expect} from 'chai';
import {Cypher} from '../src/ejercicio-3/cypher';
import {CaesarCypher} from '../src/ejercicio-3/caesarCypher';

describe('Cypher subclass tests', () => {
  const cypher1: Cypher = new CaesarCypher();
  it('Un objecto del Cifrado de Cesar tiene que pertenecer a la clase Cypher', () => {
    expect(cypher1 instanceof Cypher).to.be.true;
  });
});
