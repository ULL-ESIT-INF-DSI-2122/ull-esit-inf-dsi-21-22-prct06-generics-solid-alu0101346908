import {Cypher} from './cypher';
/**
 * Clase que extiende a Cypher y modela el cifrado por el metodo de Cesar, deplazamiento segun un alfabeto y una key
 */
export class CaesarCypher extends Cypher {
  constructor(alphabet:string, key:string) {
    super(alphabet, key);
  }
  /**
   * Metodo que encripta un mensaje dado un alfabeto y llave cargados en la clase
   * @param text Mensaje a encriptar
   * @returns Mensaje encriptado
   */
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
  /**
   * Metodo que decripta un mensaje dado un alfabeto y llave cargados en la clase
   * @param text Mensaje encriptado a desencriptar
   * @returns Mensaje desencriptado
   */
  decypher(text:string): string {
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
    let shift: number = 0;
    let decriptedText: string = ``;
    while (index < text.length) {
      dummytextchar = text.charAt(index);
      dummykeychar = ampliedkey.charAt(index);
      shiftstart = this.alphabet.indexOf(dummytextchar);
      shiftend = this.alphabet.indexOf(dummykeychar);
      if (shiftstart == -1) {
        decriptedText += dummytextchar;
      } else {
        if (shiftstart-shiftend-1 < 0) {
          shift = this.alphabet.length +(shiftstart - shiftend -1);
        } else shift = shiftstart-shiftend-1;
        decriptedText += this.alphabet.charAt((shift)% this.alphabet.length);
      }
      index++;
    }
    return decriptedText;
  }
}
