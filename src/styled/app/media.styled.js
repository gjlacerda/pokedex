import {css} from 'styled-components';

const sizes = {
    phone: 480,
    tablet: 600,
    desktop: 992
};

const media = {

    phone: (...args) => {
        return css`
            @media (min-width: ${sizes.phone}px) {
                ${css(...args)}
            }
        `;
    },

    tablet: (...args) => {
        return css`
            @media (min-width: ${sizes.tablet}px) {
                ${css(...args)}
            }
        `;
    },

    desktop: (...args) => {
        return css`
            @media (min-width: ${sizes.desktop}px) {
                ${css(...args)}
            }
        `;
    },
};

export default media;