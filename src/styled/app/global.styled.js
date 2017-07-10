import {injectGlobal} from 'styled-components';
import {bodyBg} from 'styled/app/colors.styled';

injectGlobal`
    body {
        background-color: ${bodyBg};
    }
    
    * {
        box-sizing: border-box;
    }
`;