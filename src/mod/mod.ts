/**
 * Interface Aritmeticable que define 4 metodos que deben tener todas las clases que lo implementen
 */
export interface Arithmeticable<T> {

  add(second:T):T;
  substract(second:T):T;
  multiply(second:T):T;
  divide(second:T):T;
}
/**
 * Collecion de Clases que implementen la inferfaz Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   *
   * @param collection Atributo lista que almacena las clases tipo Arithmeticable<T>
   */
  constructor(private collection : T[]) {
  }
  /**
   * "Pusher" para añadir un arithmeticable a la coleccion
   * @param arithmeticable Añade el arithmeticable a la coleccion
   */
  addArithmeticable(arithmeticable: T) {
    this.collection.push(arithmeticable);
  }
  /**
   * Getter de la lista de Aretmethicable
   * @param index Indice del arithmeticable que queramos retornar
   * @returns Aretmethicable<T>
   */
  getArithmeticable(index:number):T {
    return this.collection[index];
  }
  /**
   * Getter de la cantidad de arithmeticable en la lista
   * @returns Devuelve el numero de arithmeticable en la lista
   */
  getNumberOfArithmeticables():number {
    return this.collection.length;
  }
}
/**
 * Clase Complex que modela un numero complejo, para ello tiene 2 atributos, a = numero real, bi = parte imaginaria
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * 
   * @param a Parte real
   * @param bi Parte imaginaria
   */
  constructor(private a: number, private bi:string) {
  }
  /**
   * 
   * @param second Numero complejo al que se le va a realizar la operacion
   * @returns retorna un nuevo numero complejo que es producto de la suma entre el invocante y el del argumento
   */
  add(second:Complex):Complex {
    const dummy1: number = + this.bi.replace('i', '');
    const dummy2: number = + second.bi.replace('i', '');
    const result: number = dummy1 + dummy2;
    return new Complex((this.a + second.a), `${result}i`);
  }
  /**
  * 
  * @param second Numero complejo al que se le va a realizar la operacion
  * @returns retorna un nuevo numero complejo que es producto de la resta entre el invocante y el del argumento
  */
  substract(second:Complex):Complex {
    const dummy1: number = + this.bi.replace('i', '');
    const dummy2: number = + second.bi.replace('i', '');
    const result: number = dummy1 - dummy2;
    return new Complex((this.a - second.a), `${result}i`);
  }
  /**
  * 
  * @param second Numero complejo al que se le va a realizar la operacion
  * @returns retorna un nuevo numero complejo que es producto de la multiplicacion entre el invocante y el del argumento
  */
  multiply(second:Complex):Complex {
    const dummy1: number = + this.bi.replace('i', '');
    const dummy2: number = + second.bi.replace('i', '');
    const real: number = (this.a * second.a)-(dummy1 * dummy2);
    const imaginary: number = (this.a * dummy2)+(dummy1 * second.a);
    return new Complex(real, `${imaginary}i`);
  }
  /**
  * 
  * @param second Numero complejo al que se le va a realizar la operacion
  * @returns retorna un nuevo numero complejo que es producto de la division entre el invocante y el del argumento
  */
  divide(second:Complex):Complex {
    const dummy1: number = + this.bi.replace('i', '');
    const dummy2: number = + second.bi.replace('i', '');
    const denom: number = dummy2 * dummy2 + this.a * second.a;
    const real: number = (this.a * second.a + dummy1 * dummy2) /denom;
    const imaginary: number = (this.a * dummy2 - this.a * dummy2) /denom;
    return new Complex(real, `${imaginary}i`);
  }
}

/**
 * Clase que implementa la interfaz Arithmeticable. Modela un numero racional por lo que tiene numerador y denominador como argumentos
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * 
   * @param numerator Numerador de un numero racional
   * @param denominator Denominador de un numero racional
   */
  constructor(private numerator: number, private denominator:number) {
  }
  /**
  * 
  * @param second Numero racional al que se le va a realizar la operacion
  * @returns retorna un nuevo numero racional que es producto de la suma entre el invocante y el del argumento
  */
  add(second:Rational):Rational {
    // eslint-disable-next-line max-len
    return new Rational(this.numerator * second.denominator + second.numerator * this.denominator, this.denominator * second.denominator);
  }
  /**
  * 
  * @param second Numero racional al que se le va a realizar la operacion
  * @returns retorna un nuevo numero racional que es producto de la resta entre el invocante y el del argumento
  */
  substract(second:Rational):Rational {
    // eslint-disable-next-line max-len
    return new Rational(this.numerator * second.denominator - second.numerator * this.denominator, this.denominator * second.denominator);
  }
  /**
  * 
  * @param second Numero racional al que se le va a realizar la operacion
  * @returns retorna un nuevo numero racional que es producto de la multiplicacion entre el invocante y el del argumento
  */
  multiply(second:Rational):Rational {
    return new Rational(this.numerator * second.numerator, this.denominator * second.denominator);
  }
  /**
  * 
  * @param second Numero racional al que se le va a realizar la operacion
  * @returns retorna un nuevo numero racional que es producto de la division entre el invocante y el del argumento
  */
  divide(second:Rational):Rational {
    return new Rational(this.numerator * second.denominator, this.denominator * second.numerator);
  }
}
