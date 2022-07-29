import styled from "styled-components"

export const InputStyle = styled.input`
    width: ${ props => typeof props.width == "number"? (props.width + "px") : (props.width) };
    color: ${props => props.color};
    height: ${ props => typeof props.height  === "number"? (props.height + "px") : (props.height) };
    border: ${props => props.border_color === "none"? "none" : ("solid " + props.border_color + " " + props.border_width + "px") };
    background-color: ${ props => props.background };
    border-radius: ${ props => typeof props.border_radius  === "number"? (props.border_radius + "px") : (props.border_radius) };
    font-size: ${ props => typeof props.fonte  === "number"? (props.fonte + "px") : (props.fonte) };
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };

    @media(max-width: 768px) {
        width: ${ props => typeof props.width_mobile  === "number"? (props.width_mobile + "px") : (props.width_mobile) };
        height: ${ props => typeof props.height_mobile  === "number"? (props.height_mobile + "px") : (props.height_mobile) };
    }
`