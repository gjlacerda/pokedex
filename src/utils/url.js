export default class Url {

    constructor(url) {
        this._url = url;
    }

    /**
     * Mount the url with the query strings passed as parameters
     * @param url
     * @param params
     * @returns {string}
     */
    mountUrlParams(params) {

        let paramKeys = Object.keys(params),
            arrKeys,
            stringKeys;

        arrKeys = paramKeys.map(key => {
            return `${key}=${params[key]}`;
        });

        stringKeys = arrKeys.join('&');

        return `${this._url}?${stringKeys}`;
    }
}