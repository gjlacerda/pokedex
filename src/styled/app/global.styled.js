import {injectGlobal} from 'styled-components';
import {bodyBg} from 'styled/app/colors.styled';

injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${bodyBg};
    }
    
    * {
        box-sizing: border-box;
    }
`;