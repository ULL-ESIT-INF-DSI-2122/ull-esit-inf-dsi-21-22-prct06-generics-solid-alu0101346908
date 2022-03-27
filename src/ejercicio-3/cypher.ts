
/**
 * Clase abstracta que modela los cifrados, contiene un alfabeto y una key
 */
export abstract class Cypher {
  constructor(protected alphabet:string, protected key:string) {
    if (this.alphabet.search(` `) != -1) {
      this.alphabet = this.alphabet.replace(/ /g, ``);
      alphabet = this.alphabet;
    }
    if (this.alphabet.search(`,`) != -1) {
      this.alphabet = this.alphabet.replace(/,/g, ``);
      alphabet = this.alphabet;
    }
    this.alphabet = alphabet;
  }
  /**
   * Getter del afabeto
   * @returns String con el alfabeto de la clase
   */
  getAlphabet():string {
    return this.alphabet;
  }
  /**
   * Getter de la llave
   * @returns String con la llave de la clase
   */
  getKey():string {
    return this.key;
  }
  /**
   * Setter de la llave de la clase
   * @param key Llave a cargar en la clase Cypher
   */
  setKey(key:string) {
    this.key = key;
  }
  /**
   * Setter del alfabeto
   * @param alphabet String que contiene el alfabeto a guardar en la clase
   */
  setAlphabet(alphabet:string) {
    if (alphabet.search(` `) != -1) {
      this.alphabet = alphabet.replace(/ /g, ``);
      alphabet = this.alphabet;
    }
    if (alphabet.search(`,`) != -1) {
      this.alphabet = alphabet.replace(/,/g, ``);
      alphabet = this.alphabet;
    }
    this.alphabet = alphabet;
  }
  /**
   * Metodo a implementar en las clases que extiendan a Cypher
   * @param text Mensaje a encriptar
   */
  abstract cypher(text: string): string;
  /**
   * Metodo a implementar en las clases que extiendan a Cypher
   * @param encryptedText Mensaje a desencriptar
   */
  abstract decypher(encryptedText:string): string;
}
