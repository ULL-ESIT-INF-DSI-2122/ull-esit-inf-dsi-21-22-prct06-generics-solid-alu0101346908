import 'mocha';
import {expect} from 'chai';
import {Cypher} from '../src/ejercicio-3/cypher';
import {CaesarCypher} from '../src/ejercicio-3/caesarCypher';

describe('Cypher subclass tests', () => {
  const cypher1: Cypher = new CaesarCypher(`ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`, `CLAVE`);
  it('Un objecto del Cifrado de Cesar tiene que pertenecer a la clase Cypher', () => {
    expect(cypher1 instanceof Cypher).to.be.true;
  });
  it('Se debe poder cifrar un mensaje usando el metodo cypher de CaesarCypher', () => {
    expect(cypher1.cypher(`HOLAESTOESUNAPRUEBA`)).to.eql(`KAMWJVFPAXXYBMWXPCW`);
  });
  it('Se debe poder descifrar un mensaje usando el metodo decypher de CaesarCypher', () => {
    expect(cypher1.decypher(`KAMWJVFPAXXYBMWXPCW`)).to.eql(`HOLAESTOESUNAPRUEBA`);
  });
});
