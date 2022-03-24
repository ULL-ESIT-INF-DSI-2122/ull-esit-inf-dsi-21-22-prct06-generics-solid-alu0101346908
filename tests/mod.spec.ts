import 'mocha';
import {expect} from 'chai';
import {Arithmeticable, ArithmeticableCollection, Complex, Rational} from '../src/mod/mod';


describe('ArithmeticableCollection tests', () => {
  // Uso como ejemplo de un numero complejo
  const complex1: Complex = new Complex(10, '20i');
  const complex2: Complex = new Complex(10, '20i');
  const complex3: Complex = new Complex(40, '-20i');
  const complexcollection: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([complex1, complex2]);
  // eslint-disable-next-line max-len
  it('Debe poderse añadir un arithmeticable a la lista', () => {
    complexcollection.addArithmeticable(complex3);
    expect(complexcollection.getArithmeticable(2)).to.be.deep.equal(complex3);
  });
  it('Debe poder obtenerse un arithmeticable de la lista segun el indice que le pasemos', () => {
    expect(complexcollection.getArithmeticable(1)).to.be.deep.equal(complex2);
  });
  it('Debe poder obtener la cantidad de arithmeticable en la lista', () => {
    expect(complexcollection.getNumberOfArithmeticables()).to.be.equal(3);
  });
});
describe('Complex tests', () => {
  const complex1: Complex = new Complex(10, '20i');
  const complex2: Complex = new Complex(10, '20i');
  // eslint-disable-next-line max-len
  const complexcollection: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([complex1, complex2]);
  // eslint-disable-next-line max-len
  it('complexcollection instance of ArithmeticableCollection', () => {
    expect(complexcollection instanceof ArithmeticableCollection).to.be.true;
  });
  it('complexcollection first complex and second complex add', () => {
    // eslint-disable-next-line max-len
    expect(complexcollection.getArithmeticable(0).add(complexcollection.getArithmeticable(1))).to.eql(new Complex(20, '40i'));
  });
  it('complexcollection first complex and second complex substract', () => {
    // eslint-disable-next-line max-len
    expect(complexcollection.getArithmeticable(0).substract(complexcollection.getArithmeticable(1))).to.eql(new Complex(0, '0i'));
  });
  it('complexcollection first complex and second complex multiply', () => {
    // eslint-disable-next-line max-len
    expect(complexcollection.getArithmeticable(0).multiply(complexcollection.getArithmeticable(1))).to.eql(new Complex(-300, '400i'));
  });
  it('complexcollection first complex and second complex divide', () => {
    // eslint-disable-next-line max-len
    expect(complexcollection.getArithmeticable(0).divide(complexcollection.getArithmeticable(1))).to.eql(new Complex(1, '0i'));
  });
});
describe('Complex tests', () => {
  const rational1: Rational = new Rational(20, 10);
  const rational2: Rational = new Rational(10, 20);
  // eslint-disable-next-line max-len
  const rationalcollection: ArithmeticableCollection<Rational> = new ArithmeticableCollection<Rational>([rational1, rational2]);
  it('complexcollection instance of ArithmeticableCollection', () => {
    expect(rationalcollection instanceof ArithmeticableCollection).to.be.true;
  });
  it('complexcollection first complex and second complex add', () => {
    // eslint-disable-next-line max-len
    expect(rationalcollection.getArithmeticable(0).add(rationalcollection.getArithmeticable(1))).to.eql(new Rational(500, 200));
  });
  it('complexcollection first complex and second complex substract', () => {
    // eslint-disable-next-line max-len
    expect(rationalcollection.getArithmeticable(0).substract(rationalcollection.getArithmeticable(1))).to.eql(new Rational(300, 200));
  });
  it('complexcollection first complex and second complex multiply', () => {
    // eslint-disable-next-line max-len
    expect(rationalcollection.getArithmeticable(0).multiply(rationalcollection.getArithmeticable(1))).to.eql(new Rational(200, 200));
  });
  it('complexcollection first complex and second complex divide', () => {
    // eslint-disable-next-line max-len
    expect(rationalcollection.getArithmeticable(0).divide(rationalcollection.getArithmeticable(1))).to.eql(new Rational(400, 100));
  });
});
