import styled from "styled-components";

export const Modal = styled.section`
    border-radius: 8px;
    background-color: var(--whitefixed);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 520px;
    height: 334px;
    justify-content: space-around;
    margin: auto auto;

    @media(max-width: 768px) {
        width: 344px;
        height: 365px;
        padding-top: 15px;
    }
`

export const Div = styled.div`
    background-color: var(--whitefixed);
    display: flex;
    font-size: 16px;
    color: var(--grey1);
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`

export const Img = styled.img`
    border-radius: 4px;
    width: 466px;
    height: 239px;

    @media(max-width: 768px) {
        width: 312px;
    }
`