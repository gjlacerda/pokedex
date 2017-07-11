let instance = null;

export default class PokemonService {

    constructor() {

        if (!instance) {
            instance       = this;
            this.start     = 1;
            this.$firebase = window.firebase;
        }

        return instance;
    }

    /**
     * Get a list of pokemons
     * @param limit
     * @returns {Promise}
     */
    list(limit = 50) {

        const db = this.$firebase
                       .database()
                       .ref('pokemons')
                       .orderByChild('id')
                       .startAt(this.start)
                       .limitToFirst(limit);

        let pokemons = [];

        return new Promise((resolve, reject) => {

            db.once('value').then(response => {

                response.forEach(child => {
                    pokemons.push(child.val());
                });

                this.start += limit;

                resolve(pokemons);

            }).catch(error => {
                reject(error);
            });
        });
    }

    /**
     * Get a pokemon by ID
     * @param pokemonId
     * @returns {Promise}
     */
    get(pokemonId) {

        const db = this.$firebase
                       .database()
                       .ref('pokemons')
                       .orderByChild('id')
                       .equalTo(+pokemonId);

        return new Promise((resolve, reject) => {

            db.once('value').then(response => {

                const pokemon = response.val()[pokemonId];

                resolve(pokemon);

            }).catch(error => {
                reject(error);
            });
        });

    }

    /**
     * Get the main type from the list of pokemon types
     * @param pokemon
     */
    getMainType(pokemon) {

        const type = pokemon.types.reduce((a, b) => {
            return a.slot < b.slot ? a : b;
        });

        return type.type.name;
    }
}