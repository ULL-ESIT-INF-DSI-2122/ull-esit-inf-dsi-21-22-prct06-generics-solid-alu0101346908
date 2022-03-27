

export abstract class Cypher {
  constructor(protected alphabet:string, protected key:string) {
    if (this.alphabet.search(` `) != -1) {
      this.alphabet = this.alphabet.replace(/ /g, ``);
    }
    if (this.alphabet.search(`,`) != -1) {
      this.alphabet = this.alphabet.replace(/,/g, ``);
    }
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
    }
    if (alphabet.search(`,`) != -1) {
      this.alphabet = alphabet.replace(/,/g, ``);
    }
  }
  abstract cypher(text: string): string;
  abstract decypher(encryptedText:string): string;
}
