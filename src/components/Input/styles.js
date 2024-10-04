import styled from 'styled-components';

export const InputContainer = styled.div`
    min-width: 100px;
    background-color: #AAAAFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        height: 75px;
        background-color: #1E1E1E;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 15px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
        text-align: right;
    }
`