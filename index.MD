# Práctica 6 - Clases e interfaces genéricas. Principios SOLID (semana del 21 al 27 de marzo)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101346908/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101346908?branch=master)
## Objetivos
  - Ejercicios
    1. El combate definitivo
    2. DSIflix
    3. El cifrado indescifrable
  - Documentacion
    - TypeDoc
    - Mocha y Chai
    - Principios SOLID
    - Instanbul y Coveralls

## Planteamiento y Solucion:

### El combate definitivo

  - Se piden implementar 3 clases, una abstracta `Fighter` de la cual se modelara luchadores de diversos universos, deben tener los atributos de la clase `Pokemon` desarrollada en la anterior practica.
  - Una clase `Combat`, muy similar a la anterior practica salvo que en esta se solicita permitir combates entre cualquier `Fighter`, para lograr combates adecuados hay que ajustar los calculos de los ataques dependiendo de que Fighters esten enfrentados.
  - Por ultimo la clase `Pokedex` debe permitir ahora añadir `Fighter`, los metodos de la anterior practica deben funcionar y estar presentes.
  - Esta implementacion se ha basado en 4 universos diferentes, las estadisticas de los luchadores implementados se han modelado a partir de sus wikis o base de datos:
    - [Pokemon](https://pokemondb.net/pokedex/all)
    - [DragonBall](https://legends.dbz.space/characters/stats)
    - [Fate](https://fategrandorder.fandom.com/wiki/Servant_List)
    - [Arknight](https://arknights.fandom.com/wiki/Operator/List)
  - Como atributos especiales se han definido:
    -  DB: Movimiento especial
    -  Fate: Atributo del personaje unico
    -  Arknight: Coste de despliegue del operador
  - Por ultimo, como adicion en esta practica, los luchadores de cada universo deben tener un getter que devuelva el mundo al que pertenecen.
  - Implementacion de `Fighter`:
      ````ts
      export abstract class Fighter {
        constructor(private name: string, private weight: number,
        private height: number, private type: string, private stats: Stats, private catchphrase: string) {
        }

        abstract getUniverse(): string;

        getName(): string {
          return this.name;
        }

        getWeight(): number {
          return this.weight;
        }

        getHeight(): number {
          return this.height;
        }

        getType(): string {
          return this.type;
        }

        getStats(): Stats {
          return this.stats;
        }

        setHp(hp:number) {
          this.stats[statsIndex.hp] = hp;
        }

        getCatchPhrase(): string {
          return this.catchphrase;
        }
      }
      ````
  - Las que extiende a `Fighter`:
      ````ts
      export class Pokemon extends Fighter {
        constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string) {
          super(name, weight, height, type, stats, catchphrase);
        }
        getUniverse(): string {
          return `Pertenezco al universo de Pokemon`;
        }
      }
      export class DragonBall extends Fighter {
        constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private specialMove: string) {
          super(name, weight, height, type, stats, catchphrase);
        }
        getSpecialMove(): string {
          return this.specialMove;
        }
        getUniverse(): string {
          return `Pertenezco al universo de DragonBall`;
        }
      }
      export class FateServant extends Fighter {
        constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private attribute: string) {
          super(name, weight, height, type, stats, catchphrase);
        }
        getAttribute(): string {
          return this.attribute;
        }

        getUniverse(): string {
          return `Pertenezco al universo de Fate`;
        }
      }
      export class ArknightOperator extends Fighter {
        constructor(name: string, weight: number, height: number, type: string, stats: Stats, catchphrase: string, private dp: number) {
          super(name, weight, height, type, stats, catchphrase);
        }
        getDpCost(): number {
          return this.dp;
        }
        getUniverse(): string {
          return `Pertenezco al universo de Arknights`;
        }
      }

      ````
  - La clase `Combat`, se ha mantenido casi identicamente, se ha sustituido todo lo que especifica a pokemon por `Fighter` y en el getter de la efectividad de los ataques se han modelado todos los posibles casos entre todos los fighters. (No se añade el snippet de dicho metodo ya que es muy amplio y básico, no es especial y está de la anterior practica.

### DSIflix

  - Se pide diseñar una interfaz generica `Streamable<T>` que debe modelar un conjunto de emisiones concretas; series, documentales, peliculas.
  - Dicha interfaz debe estar implementada en la clase abstracta generica `BasicStreamableColletion<T>` que debera particularizar algunas propiedades y metodos.
  - Una vez implementado esos modelos, se procede a diseñar las clases de multimedia tipicas y sus colecciones:
    - `Movie` y su coleccion `MovieCollection`
    - `Serie` y su coleccion `SeriesCollection`
    - `Documentary` y su coleccion `DocumentariesCollection`
  - Las clases que modelan de forma "unitaria" los multimedia contienen casi los mismos atributos identificativos:
    - `name`, `date`, `ce`.
    - Hay algunos exclusivos como: `genre`, `episodes`, `director`.
  - Se definen los getters necesarios para esos atributos.
    ````ts
    export class Serie {
      constructor(private name: string, private date: number, private episodes: number, private genres: string[], private CE: number) {
      }
      getName(): string {
        return this.name;
      }
      getDate(): number {
        return this.date;
      }
      getEpisodesNumber(): number {
        return this.episodes;
      }
      getGenres(): string[] {
        return this.genres;
      }
      getCE(): number {
        return this.CE;
      }
    }
    ````
  - En lo que respecta a las colecciones especificas se añaden las busquedas segun los atributos definidos en las peliculas, series, documentales ademas de las basicas de `BasicStreamableCollection<T>`:
    - `getMediaByName`
    - `getMediaByYear`
    - `getMediaByLenght`
    - `getMediaByDirector`
    - `getMediaByEpisodes`
    - `getMediaByGenre`
    - `getMediaByCE`
  - Todas ellas funcionan de forma similar donde se recorre la lista propia del objeto con un `forEach` en la que si coincide el filtro pasado por argumento esta es metida en una nueva lista que devolveremos al acabar la busqueda.
    ````ts
      getMediaByEpisodes(number: number): Serie[] {
        let resultList: Serie[] = [];
        this.series.forEach((value) => {
          if (value.getEpisodesNumber() === number) {
            resultList.push(value);
          }
        });
        return resultList;
      }
    ````

### El cifrado indescifrable

  - El **cifrado de César** se presenta como un cifrado por desplazamiento utilizando un alfabeto y una llave.
  - Su funcionamiento es muy simple donde en base a la llave, se obtiene los desplazamientos a realizar, siempre siguiendo el alfabeto que debe utilizar la llave.
    - Se presentan varias anotaciones:
      - En caso de que la clave y el mensaje no pertenezcan al alfabeto previsto se codificara con el propio simbolo.
      - Si la clave es de menor longitud del mensaje esta se repetira hasta tener la misma longitud
  - Conociendo todas estas condiciones y que se debe desarrolla la solucion siguiendo los principios SOLID se ha decidido hacer una clase abstracta `Cypher` la cual contendra los atributos y metodos basicos que define a un cifrado. Declara el `key` y `alfaphabet` como los atributos basicos y sus getters y setters. Deja a implementacion de las clases que la extiendan los metodos `cypher` y `decipher`.
  - En la introduccion del alfabeto se eliminaran los espacios y las comas que separen los elementos del alfabeto.
    ````ts
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
    ````
  - Se define la clase `CaesarCypher` que modela el Cifrado de Cesar y  extiende a `Cypher`. Carga los atributos de `Cypher` mediante el `super`.
  - Se definen los metodos de **cifrado y descifrado**:
    - El metodo de cifrado **recibe un mensaje sin cifrar, obtiene su longitud y completa la llave en caso de que sea de menor longitud que esta**. **Se procede con un bucle el cual recorre de forma secuencial los caracteres de izquierda a derecha** del string de entrada, calculando su posicion respecto al alfabeto y calculando el tamaño del desplazamiento consultando el caracter de la llave en el alfabeto. **En caso de no encontrar el caracter del mensaje en el alfabeto se procedera con el cifrado con el propio elemento** añadiendolo a la cadena encriptada, **en caso contrario se añadira a la cadena encriptada** sumando la posicion del char del mensaje con el desplazamiento. **Se realiza el modulo de dicha suma con la longitud del alfabeto para los casos en los que se salga** (se regresa al principio). Esto se repite hasta que se completa el cifrado
    -  **El descifrado es completamente igual salvo que ahora no se va a sumar los deplazamientos (a la derecha) si no que se realizara al a izquierda**. Ademas se debe comprobar ahora si se sale del alfabeto por la izquierda.

  ````ts
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
  ````