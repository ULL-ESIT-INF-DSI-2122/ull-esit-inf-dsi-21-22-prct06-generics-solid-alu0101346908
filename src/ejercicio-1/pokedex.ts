import {Fighter} from '../ejercicio-1/fighter';
/**
 * Clase Pokedex que almacenara todos los pokemons que se encuentren (definan)
 */
export class Pokedex {
  /**
   *
   * @param pokemons Atibuto de la pokedex que sirve para almacenar los pokemons para posterior consulta
   */
  constructor(private fighters: Fighter[]) {
  }
  /**
   *
   * @param pokemon Numero id del pokemon que queramos obtener
   * @returns Devuelve el pokemon del array que corresponde a la id solicitada
   */
  getFighter(pokedexId: number): Fighter|undefined {
    return (pokedexId >= 0 && pokedexId <= this.fighters.length-1) ? this.fighters[pokedexId]: undefined;
  }
  /**
   *
   * @param pokemon Argumento que recibe un Pokemon y lo añade a la Pokedex
   */
  addFighter(fighter: Fighter) {
    this.fighters.push(fighter);
    return true;
  }
}


