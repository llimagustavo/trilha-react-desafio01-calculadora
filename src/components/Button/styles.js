import styled from 'styled-components';

export const ButtonContainer = styled.button`
    min-height: 50px;
    min-width: 80px;
    border: 1px solid #1E1E1E;
    background-color: #373737;
    color: #FFFFFF;
    font-size: clamp(18px, 4vw, 24px);
    flex: 1;
    border-radius: 6px;
    font-family: 'Segoe UI', 'Segoe UI Variable', sans-serif;
    font-weight: 400;
    
    &:hover {
        background-color: #2D2D2D;
    }
`

export const EqualButton = styled.button`
    min-height: 50px;
    min-width: 80px;
    border: 1px solid #1E1E1E;
    background-color: #0078D4;
    color: #FFFFFF;
    font-size: clamp(18px, 4vw, 24px);
    flex: 1;
    border-radius: 6px;
    font-family: 'Segoe UI', 'Segoe UI Variable', sans-serif;
    font-weight: 400;
    
    &:hover {
        background-color: #0064B1;
    }
`;

export const SecondaryButton = styled.button`
    min-height: 50px;
    min-width: 80px;
    border: 1px solid #1E1E1E;
    background-color: #2D2D2D;
    color: #FFFFFF;
    font-size: clamp(18px, 4vw, 24px);
    flex: 1;
    border-radius: 6px;
    font-family: 'Segoe UI', 'Segoe UI Variable', sans-serif;
    font-weight: 400;
    
    &:hover {
        background-color: #373737;
    }
`;