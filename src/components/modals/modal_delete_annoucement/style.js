import styled from "styled-components";

export const Section = styled.section`
    width: 520px;
    height: 331px;
    background-color: var(--whitefixed);
    display: flex;
    padding: 0px 24px 24px 24px;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 347px;
        height: 287px;
        padding-top: 15px;
    }
`

export const DivTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`

export const DivBottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: space-around;
    height: 85%;
`

export const H3 = styled.h3`
    color: var(--grey1);
    font-size: 16px;
`

export const H2 = styled.h2`
    color: var(--grey1);
    font-size: 16px;
`

export const P = styled.p`
    color: var(--grey2);
    font-size: 16px;
`

export const Div = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`