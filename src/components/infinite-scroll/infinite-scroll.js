import React from 'react';

export default class InfiniteScroll extends React.Component {

    constructor(props) {

        super(props);

        /**
         * Element who will be scrolled
         * @type {Element}
         * @private
         */
        this._element = this.props.window
            ? window
            : document.querySelector(this.props.container);

        /**
         * Indicate if is processing a request
         * @type {boolean}
         */
        this.loading = false;
    }

    componentDidMount() {
        this._element.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        this._element.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    render() {
        return (
            <div ref={(ref) => this._ref = ref }>
                {this.props.children}
            </div>
        );
    }

    /**
     * Calculate if the scroll reached to bottom and execute the pagination
     */
    handleScroll() {

        if (this.loading) {
            return;
        }

        const offset     = +this.props.offset || 0;
        const endScreenY = window.pageYOffset + window.innerHeight + offset;
        const endRefY    = this._ref.offsetTop + this._ref.offsetHeight;

        if (endScreenY >= endRefY) {

            this.loading = true;

            this.props.paginate().then(() => this.loading = false);
        }

    }
}