import {Cypher} from './cypher';

export class CaesarCypher extends Cypher {
  constructor(protected alphabet:string, protected key:string) {
    super(alphabet, key);
  }
  cypher(text:string): string {
    return ``;
  }
  decypher(text:string): string {
    return ``;
  }
}
