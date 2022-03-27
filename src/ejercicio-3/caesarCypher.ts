import {Cypher} from './cypher';

export class CaesarCypher extends Cypher {
  constructor(protected alphabet:string, protected key:string) {
    super(alphabet, key);
  }
  cypher(text:string): string {
    let ampliedkey: string = this.key;
    let excess: number = 0;
    while (ampliedkey.length < text.length) {
      ampliedkey += ampliedkey;
    }
    if (ampliedkey.length > text.length) {
      excess = ampliedkey.length - text.length;
      ampliedkey = ampliedkey.substring(0, ampliedkey.length-excess);
    }
    let index: number = 0;
    let dummytextchar: string = ``;
    let dummykeychar: string = ``;
    let shiftend: number = 0;
    let shiftstart: number = 0;
    let encriptedText: string = ``;
    while (index < text.length) {
      dummytextchar = text.charAt(index);
      dummykeychar = ampliedkey.charAt(index);
      shiftstart = this.alphabet.indexOf(dummytextchar);
      shiftend = this.alphabet.indexOf(dummykeychar);
      if (shiftstart == -1) {
        encriptedText += dummytextchar;
      } else {
        encriptedText += this.alphabet.charAt(((shiftstart+shiftend+1)% this.alphabet.length));
      }
      index++;
    }
    return encriptedText;
  }
  decypher(text:string): string {
    return ``;
  }
}
