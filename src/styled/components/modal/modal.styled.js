import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fade 0.3s forwards;
    
    @keyframes fade {
        from {
            opacity: 0;
        }
        
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
    animation: zoom 0.3s forwards;
    
    @keyframes zoom {
        from {
            transform: scale(0);
        }
        
        to {
            transform: scale(1);
        }
    }
`;