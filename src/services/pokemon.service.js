import Url from '~/src/utils/url';

const api    = 'http://pokeapi.co/api/v2/pokemon/';
const sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{index}.png';

export default class PokemonService {

    constructor() {

        this.url    = new Url(api);
        this.offset = 0;
    }

    /**
     * Get a list of pokemons
     * @param limit
     * @returns {Promise}
     */
    list(limit) {

        let url = this.url.mountUrlParams({
            limit: limit || 20,
            offset: this.offset
        });

        let pokemons = [];

        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(({results}) => {

                    pokemons = results.map((pokemon, index) => {

                        return Object.assign({}, pokemon, {
                            sprite: sprite.replace('{index}', ++index)
                        });
                    });

                    resolve(pokemons);
                })
                .catch(error => reject(error));
        });

    }
}