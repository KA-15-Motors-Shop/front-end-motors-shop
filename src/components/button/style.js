import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: ${ props => typeof props.width == "number"? (props.width + "px") : (props.width) };
    color: ${props => props.color? ("var(--grey0") : (props.color)} ;
    height: ${ props => typeof props.height  === "number"? (props.height + "px") : (props.height) };
    border: ${props => props.border_color === "none"? "none" : ("solid " + props.border_color + " " + props.border_width + "px") };
    background-color: ${ props => props.background? ("var(--") : (props.background) };
    border-radius: ${ props => typeof props.border_radius  === "number"? (props.border_radius + "px") : (props.border_radius) };
    cursor: pointer;
    font-size: ${ props => typeof props.fonte  === "number"? (props.fonte + "px") : (props.fonte) };
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };

    @media(max-width: 768px) {
        width: ${ props => typeof props.width_mobile  === "number"? (props.width_mobile + "px") : (props.width_mobile) };
        height: ${ props => typeof props.height_mobile  === "number"? (props.height_mobile + "px") : (props.height_mobile) };
    }

`

export const Imagem = styled.img`
    width: ${ props => typeof props.width_imagem  === "number"? (props.width_imagem + "px") : (props.width_imagem) };
    height: ${ props => typeof props.height_imagem  === "number"? (props.height_imagem + "px") : (props.height_imagem) };

    @media(max-width: 768px) {
        width: ${ props => typeof props.width_imagem_mobile  === "number"? (props.width_imagem_mobile + "px") : (props.width_imagem_mobile) };
        height: ${ props => typeof props.height_imagem_mobile  === "number"? (props.height_imagem_mobile + "px") : (props.height_imagem_mobile) };
    }
`