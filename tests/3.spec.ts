import 'mocha';
import {expect} from 'chai';
import {Cypher} from '../src/ejercicio-3/cypher';
import {CaesarCypher} from '../src/ejercicio-3/caesarCypher';

describe('Cypher subclass tests', () => {
  const cypher1: Cypher = new CaesarCypher(`ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`, `CLAVE`);
  const cypher2: Cypher = new CaesarCypher(`ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`, `CLAVE`);
  const cypher3: Cypher = new CaesarCypher(`A B C D`, `CLAVE`);
  const cypher4: Cypher = new CaesarCypher(`A,B,C,D`, `CLAVE`);
  const cypher5: Cypher = new CaesarCypher(`A B C D`, `CLAVE`);
  const cypher6: Cypher = new CaesarCypher(`A,B,C,D`, `CLAVE`);
  cypher5.setAlphabet(`D C B A`);
  cypher6.setAlphabet(`D,C,B,A`);
  it('Un objecto del Cifrado de Cesar tiene que pertenecer a la clase Cypher', () => {
    expect(cypher1 instanceof Cypher).to.be.true;
  });
  it('Diferentes formatos de entrada de alfabeto', () => {
    expect(cypher3.getAlphabet()).to.be.equal(`ABCD`);
    expect(cypher4.getAlphabet()).to.be.equal(`ABCD`);
  });
  it('Getters y setters heredados de Cypher', () => {
    expect(cypher1.getAlphabet()).to.be.equal(`ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`);
    expect(cypher1.getKey()).to.be.equal(`CLAVE`);
    cypher2.setKey(`HOLA`);
    cypher2.setAlphabet(`AUYVB`);
    expect(cypher2.getAlphabet()).to.be.equal(`AUYVB`);
    expect(cypher2.getKey()).to.be.equal(`HOLA`);
  });
  it('Se debe poder cifrar un mensaje usando el metodo cypher de CaesarCypher', () => {
    expect(cypher1.cypher(`HOLAESTOESUNAPRUEBA`)).to.eql(`KAMWJVFPAXXYBMWXPCW`);
    expect(cypher1.cypher(`HOLAESTOESUNAPRUEBAx`)).to.eql(`KAMWJVFPAXXYBMWXPCWx`);
  });
  it('Se debe poder descifrar un mensaje usando el metodo decypher de CaesarCypher', () => {
    expect(cypher1.decypher(`KAMWJVFPAXXYBMWXPCW`)).to.eql(`HOLAESTOESUNAPRUEBA`);
    expect(cypher1.decypher(`KAMWJVFPAXXYBMWXPCWx`)).to.eql(`HOLAESTOESUNAPRUEBAx`);
  });
});
