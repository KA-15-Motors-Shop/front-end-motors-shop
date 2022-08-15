import { Section, DivTop, Titulo, Span, Div, TextArea, VerticalDiv, HorizontalDiv, Info } from "./style";
import iconX from "../../../assets/x.svg";
import Button from "../../button";
import Input from "../../input";
import { useState } from "react";
import SpanAndInput from "../../span_and_input";

function ModalCreateAnnoucement() {
    const [mapNumber, setMapNumber] = useState([1]);

  return (
    <Section>
      <DivTop>
        <Titulo>Criar anúncio</Titulo>
        <Button icon={iconX} c={"gray"} h={24} w={24} p={0} />
      </DivTop>
      <Span>Tipo de Anuncio</Span>
      <Div>
        <Button
          w={228}
          mob_w={152}
          text="Venda"
          c="var(--whitefixed)"
          bg="var(--brand-1)"
        />
        <Button w={228} text="Leilão" bd_color={"var(--grey4)"} mob_w={152} />
      </Div>
      <Info>Informações do veiculo </Info>
      <Span>Titulo</Span>
      <Input
        w={466}
        h={48}
        text="produto"
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />
      <HorizontalDiv>
        <VerticalDiv>
          <span>Ano</span>
          <Input
            w={148}
            h={48}
            text="2018"
            bd_color={"var(--grey7)"}
            bd_width={1.5}
            p={"0 16px"}
            mob_w={152}
          />
        </VerticalDiv>
        <VerticalDiv>
          <span>Quilometros</span>
          <Input
            text="0"
            h={48}
            bd_color={"var(--grey7)"}
            bd_width={1.5}
            p={"0 16px"}
            mob_w={152}
            w={148}
          />
        </VerticalDiv>
        <VerticalDiv>
          <span>Preço</span>
          <Input
            text="100.000,00"
            h={48}
            bd_color={"var(--grey7)"}
            bd_width={1.5}
            p={"0 16px"}
            mob_w={314}
            w={148}
          />
        </VerticalDiv>
      </HorizontalDiv>
      <Span>Descrição</Span>
      <TextArea cols="30" rows="5" wrap="hard">
        lorem ipsolum dsjklaj klaslkd fklashkjha jkhd jhjka dhjkahkjdhklahdkash
        hyfdskj skdjhfjhsad hjsdhfkj h hkjsdhjkfh hsadfjk
      </TextArea>
      <Span>Tipo de Veiculo</Span>
      <Div>
        <Button
          w={228}
          text="Carro"
          c="var(--whitefixed)"
          bg="var(--brand-1)"
          mob_w={152}
        />
        <Button w={228} text=" Moto" bd_color="var(--grey4)" mob_w={152} />
      </Div>
      <Span>Imagem da capa</Span>
      <Input
        w={466}
        h={48}
        text={"https://image.com"}
        bd_color={"var(--grey7)"}
        p={"0 16px"}
        mob_w={314}
      />

      {mapNumber.map((item, index) => (
        <SpanAndInput index={item} />
      ))}
      <Button
        text="Adicionar campo para imagem da galeria"
        w={315}
        h={38}
        bg={"var(--brand-4)"}
        c={"var(--brand-1)"}
        m={"24px 0 44px 0px"}
        onClick={() => {
          setMapNumber([...mapNumber, mapNumber.length + 1]);
          console.log(mapNumber);
        }}
      />
      <Div>
        <Button
          text="Excluir anúncio"
          h={48}
          w={262}
          bg="var(--grey6)"
          c="var(--grey2)"
          m="0 0 2px 0"
          mob_w={146}
        />
        <Button
          text="Salvar alterações"
          h={48}
          w={193}
          bg={"var(--brand-3)"}
          c={"var(--brand-4)"}
          mob_w={159}
        />
      </Div>
    </Section>
  );
}

export default ModalCreateAnnoucement;
