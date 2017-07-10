import Url from 'utils/url';

const api    = 'http://pokeapi.co/api/v2/pokemon/';
const sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{index}.png';

let instance = null;

export default class PokemonService {

    constructor() {

        if (!instance) {
            instance = this;
        }

        this.url      = new Url(api);
        this.offset   = 0;
        this.pokemons = {};

        return instance;
    }

    /**
     * Get a list of pokemons
     * @param limit
     * @returns {Promise}
     */
    list(limit) {

        const url = this.url.mountUrlParams({
            limit: limit || 50,
            offset: this.offset
        });

        let pokemons = [];

        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(({results}) => {

                    pokemons = results.map((pokemon, index) => {

                        let id = ++index + this.offset;

                        return Object.assign({}, pokemon, {
                            sprite: sprite.replace('{index}', id),
                            shiny: sprite.replace('{index}', 'shiny/' + id)
                        });
                    });

                    this.offset += results.length;

                    resolve(pokemons);
                })
                .catch(error => reject(error));
        });

    }

    /**
     * Get data of a pokemon by name
     * @param name
     * @returns {Promise}
     */
    get(name) {

        const url = api + name + '/';

        return new Promise((resolve, reject) => {

            const cachedPokemon = this.pokemons[name];

            if (cachedPokemon) {
                return resolve(cachedPokemon);
            }

            fetch(url)
                .then(response => response.json())
                .then((result) => {

                    // Cache
                    this.pokemons[result.name] = {
                        types: result.types,
                        name: result.name
                    };

                    resolve(result);
                })
                .catch(error => reject(error));
        });
    }

    /**
     * Get the main type from the list of pokemon types
     * @param name
     */
    getMainType(name) {
        
        const types = this.pokemons[name].types;

        return types.reduce((a, b) => {
            return a.slot < b.slot;
        });
    }
}