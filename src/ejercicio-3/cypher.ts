

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
  getAlphabet():string {
    return this.alphabet;
  }
  getKey():string {
    return this.key;
  }
  setKey(key:string) {
    this.key = key;
  }
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
  abstract cypher(text: string): string;
  abstract decypher(encryptedText:string): string;
}
