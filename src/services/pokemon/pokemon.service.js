let instance = null;

export default class PokemonService {

    constructor() {

        if (!instance) {
            instance       = this;
            this.offset    = 0;
            this.pokemons  = {};
            this.$firebase = window.firebase;
        }

        return instance;
    }

    /**
     * Get a list of pokemons
     * @param limit
     * @returns {Promise}
     */
    list() {

        const db = this.$firebase.database().ref('pokemons');

        let pokemons = [];

        return new Promise((resolve, reject) => {

            db.once('value').then(response => {

                response.forEach(child => {
                    pokemons.push(child.val());
                });

                resolve(pokemons);


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