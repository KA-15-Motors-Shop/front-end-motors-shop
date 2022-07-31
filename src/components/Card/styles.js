import styled from "styled-components"

export const CardStyle = styled.div`
  width: ${(props) =>
    typeof props.width == "number" ? props.width + "px" : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? props.height + "px" : props.height};
  background-color: ${(props) => props.background};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

export const TitleCardStyle = styled.p`
  width: ${(props) =>
    typeof props.width == "number" ? props.width + "px" : props.width};
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fonte === "number" ? props.fonte + "px" : props.font - size};
`

export const DescriptionCardStyle = styled.div`
  width: ${(props) =>
    typeof props.width == "number" ? props.width + "px" : props.width};
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fonte === "number" ? props.fonte + "px" : props.font - size};
`

export const SellerCardStyle = styled.div`
  width: ${(props) =>
    typeof props.width == "number" ? props.width + "px" : props.width};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fonte === "number" ? props.fonte + "px" : props.font - size};
`

export const InfoCardStyle = styled.div`
  width: ${(props) =>
    typeof props.width == "number" ? props.width + "px" : props.width};
  background-color: ${(props) => props.background};
  border-radius: ${(props) =>
    typeof props.border_radius === "number"
      ? props.border_radius + "px"
      : props.border_radius};
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fonte === "number" ? props.fonte + "px" : props.font - size};
`

export const PriceCardStyle = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fonte === "number" ? props.fonte + "px" : props.font - size};
`

export const Image = styled.img`
  width: ${(props) =>
    typeof props.width_imagem === "number"
      ? props.width_imagem + "px"
      : props.width_imagem};
  height: ${(props) =>
    typeof props.height_imagem === "number"
      ? props.height_imagem + "px"
      : props.height_imagem};

  @media (max-width: 768px) {
    width: ${(props) =>
      typeof props.width_imagem_mobile === "number"
        ? props.width_imagem_mobile + "px"
        : props.width_imagem_mobile};
    height: ${(props) =>
      typeof props.height_imagem_mobile === "number"
        ? props.height_imagem_mobile + "px"
        : props.height_imagem_mobile};
  }
`
