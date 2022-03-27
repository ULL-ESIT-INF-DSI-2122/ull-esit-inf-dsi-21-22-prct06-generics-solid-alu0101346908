import 'mocha';
import {expect} from 'chai';
import {Streamable} from '../src/ejercicio-2/stremeable'
import {Serie} from '../src/ejercicio-2/serie'

describe('Streamable interface tests', () => {
  const test1: Streamable<serie> = {name: `test`};
  it('test1 debe corresponder con un tipo Streamable', () => {
    expect(test1).to.respondsTo(`name`);
  });
});


