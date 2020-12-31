import styled from 'styled-components';

//App Router
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100px;
    width: 100%;
    align-items: center;
    box-shadow: 8px 8px 10px #BFBFBF;
    background: #0A235C;
    
    a {
        
        margin-left: 70px;
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;

// About
export const AboutButton = styled.button`
    margin-top: 15px;
    border: none;
`;